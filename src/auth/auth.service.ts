import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "src/user/user.service";
import * as bcrypt from 'bcrypt'
import { AuthDTO } from "./dto/auth.dto";

@Injectable()
export class AuthService{
    constructor(private userService: UserService, private jwtService: JwtService){}

    async signIn(data: AuthDTO): Promise<{access_token: string}>{
        const user = await this.userService.findOneToLogin(data.email)
        const password = user.password.toString()
        if(!(await bcrypt.compare(data.pass, password))){
            throw new UnauthorizedException("Autorizacion denegada, revise las credenciales")
        }

        const userRole = await this.userService.findUserRole(user.iduser);
        console.log(userRole.role.name)
        if (!userRole) {
            throw new UnauthorizedException("El usuario no tiene un rol asignado");
        }

        const payload = {sub: user.iduser, email: user.email, rol:userRole.role.name}
        return{
            access_token: await this.jwtService.signAsync(payload)
        }
    }
}

