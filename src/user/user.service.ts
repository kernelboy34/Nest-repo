import { ConflictException, Inject, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { CreateUserDto } from "./dto/createUser.dto";
import { UpdateUserDto } from "./dto/updateUser.dto";
import { email } from "src/constants/VerifyEmails.constant";
import * as bt from 'bcrypt'
import {config} from '../config/config'
import { Op } from "sequelize";
import { User } from "./entity/user.entity";
import { Rol } from "src/rol/entity/rol.entity";

@Injectable()
export class UserService{
    constructor(
        @Inject('USERS_REPOSITORY')
        private userRepository: typeof User,
        @Inject("ROLS_REPOSITORY")
        private rolRepository: typeof Rol
    ){}

    async create(data: CreateUserDto): Promise<User>{
        let ValidEmail = false
        email.forEach(emails => {
            if(data.email.endsWith(emails)){
                ValidEmail = true
            }
        })
        if(!ValidEmail){
            throw new UnauthorizedException("Dominio de correo no permitido")
        }

        const rolExist = await this.rolRepository.findByPk(data.rols_idrols)
        if(!rolExist){
            throw new NotFoundException("Rol no existente")
        }
        data.password = await bt.hash(data.password, config.salt)
        return await this.userRepository.create({
            name: data.name,
            email: data.email,
            password: data.password,
            rols_idrols: data.rols_idrols
        })
    }

    async findOne(email: string){
        const UserFound = await this.userRepository.findOne({
            where:{
                email:email
            },
        })
        if(!UserFound){
            throw new NotFoundException("Usuario no encontrado")
        }
        return await UserFound
    }

    async findAll(): Promise<User[]>{
        return await this.userRepository.findAll({
            where:{
                is_deleted:{
                    [Op.ne]:1
                }
            }
        })
    }

    async findUserRole(userId: number) {
        return await this.userRepository.findOne({
            where:{
                iduser:{
                    [Op.eq]:userId
                }
            },
            include:[{model:Rol}]
        });
    }

    async findOneToLogin(email: string){
        const userFound = await this.userRepository.findOne({
            where:{
                email: {
                    [Op.eq]:email
                },
                is_deleted:{
                    [Op.ne]:1
                }
            },
        })
        if(!userFound){
            throw new NotFoundException("Usuario no encontrado")
        }
        return await userFound
    }

    async update(data: UpdateUserDto, id: number){
        if(data.password){
            data.password = await bt.hash(data.password, config.salt)
        }
        if(data.rols_idrols){
            const rolExists = await this.rolRepository.findByPk(data.rols_idrols)
            if(!rolExists){
                throw new NotFoundException("Rol no existente")
            }
        }
        const [userUpdate] = await this.userRepository.update(data, {
            where:{
                iduser:{
                    [Op.eq]:id
                }
            }
        })

        if(userUpdate === 0){
            throw new NotFoundException("Usuario a actualizar no fue encontrado")
        }

        return {message: "Usuario actualizado correctamente", status: 200, data}
    }

    async delete(id: number){
        const [userDelete] = await this.userRepository.update(
            { is_deleted: 1},
            {
                where:{
                    iduser:id,
                    is_deleted:{
                        [Op.ne]:1
                    }
                }
            }
        )
        if(userDelete === 0){
            throw new NotFoundException("Usuario eliminado o fue eliminado")
        }
        return {message: "Usuario eliminado correctamente", status: 200}
    }
}