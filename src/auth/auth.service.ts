import { Inject, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "src/user/user.service";
import * as bcrypt from 'bcrypt'
import { AuthDTO } from "./dto/auth.dto";
import { ResetToken } from "./entity/token.entity";
import { Op } from "sequelize";
import { config } from "src/config/config";
import { Cron} from "@nestjs/schedule";
import { Forgot_TokenDto } from "./dto/token_forgot.dto";
import { ResetTokenDto } from "./dto/token_reset.dto";


@Injectable()
export class AuthService{
    constructor(
        private userService: UserService,
        private jwtService: JwtService,
        @Inject("TOKEN_REPOSITORY")
        private tokenRepository: typeof ResetToken,
    ){}

    async signIn(data: AuthDTO): Promise<{access_token: string}>{
        const user = await this.userService.findOneToLogin(data.email)
        const password = user.password.toString()
        if(!(await bcrypt.compare(data.pass, password))){
            throw new UnauthorizedException("Autorizacion denegada, revise las credenciales")
        }

        const userRole = await this.userService.findUserRole(user.iduser);
        if (!userRole) {
            throw new UnauthorizedException("El usuario no tiene un rol asignado");
        }

        const payload = {sub: user.iduser, email: user.email, rol:userRole.role.name}
        return{
            access_token: await this.jwtService.signAsync(payload)
        }
    }


    async forgotPassword(email: Forgot_TokenDto){
        const user = await this.userService.findOne(email.email);
        if (!user) {
            throw new NotFoundException("Usuario no encontrado");
        }

        const payload = { sub: user.iduser, email: user.email };
        const resetToken = await this.jwtService.signAsync(payload, { expiresIn: '15m' });

        const expiresAt = new Date(Date.now() + 15 * 60 * 1000);
        await this.tokenRepository.create({
            user_iduser: user.iduser,
            token: resetToken,
            expiresAt,
        });

        return {message: "Token de recuperacion creado", resetToken}
    }

    async resetPassword(data: ResetTokenDto){
        const tokenRecord = await this.tokenRepository.findOne({
            where:{
                token:{
                    [Op.eq]: data.token
                },
                expiresAt:{
                    [Op.gt]: new Date()
                }
            }
        })
        if(!tokenRecord){
            throw new NotFoundException("Token no existente o expiro")
        }
        if(data.password.length < 7){
            throw new UnauthorizedException("La nueva contraseña es muy corta")
        }

        console.log(tokenRecord.user_iduser)
        const user = await this.userService.findById(tokenRecord.user_iduser)

        const hashPassword = await bcrypt.hash(data.password, config.salt)
        await this.userService.updatePassword(hashPassword, user.iduser) 

        await this.tokenRepository.destroy({
            where: {
                token:{
                    [Op.eq]: data.token
                }
            }
        })
        return {message: "Contraseña reestablecida con exito"}
    }

    @Cron("* */15 * * *")
    async removeExpiredTokens():Promise<void>{
        const deletedTokens = await this.tokenRepository.destroy({
            where:{
                expiresAt:{
                    [Op.lt]: new Date() 
                }
            }   
        })
        console.log("Cleaning Tokens")
    }
}