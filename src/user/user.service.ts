import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { Prisma, user } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserDto } from "./dto/createUser.dto";
import { UpdateUserDto } from "./dto/updateUser.dto";
import { email } from "src/constants/VerifyEmails.constant";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import * as bt from 'bcrypt'

@Injectable()
export class UserService{
    constructor(private db: PrismaService){}

    async create(data: CreateUserDto):Promise<CreateUserDto>{
        let ValidEmail = false
            email.forEach(emails => {
                if(data.email.endsWith(emails)){
                    ValidEmail = true
                }
            })
            if(!ValidEmail){
                throw new UnauthorizedException("Dominio de correo no permitido")
            }
        try{
            data.password = await bt.hash(data.password, 10)
            return await this.db.user.create({
                data
            })
        }catch(error){
            if(error instanceof Prisma.PrismaClientKnownRequestError){
                if(error.code === "p2002"){
                    throw new ConflictException("El correo ya esta en uso")
                }
            }
        }
    }

    async findOne(email: string):Promise<Omit<user,'password'>>{
        const UserFound = await this.db.user.findUnique({
            where:{
                email:email
            },
            select:{
                iduser: true,
                rols_idrols:true,
                name: true,
                email: true,
                is_deleted:true,
            }
        })
        if(!UserFound){
            throw new NotFoundException("Usuario no encontrado")
        }
        return await UserFound
    }

    async findAll():Promise<Omit<user, 'password'>[]>{
        return await this.db.user.findMany({
            select:{
                iduser:true,
                rols_idrols: true,
                name: true,
                email:true,
                is_deleted: true,
                rols: true
            }
        })
    }

    async findOneToLogin(email: string) : Promise<user>{
        const userFound = await this.db.user.findUnique({
            where:{
                email: email
            }
        })
        if(!userFound){
            throw new NotFoundException("Usuario no encontrado")
        }
        return await userFound
    }

    async update(data: UpdateUserDto, id: number): Promise<UpdateUserDto>{
        try{
            return await this.db.user.update({
                where:{
                    iduser: id,
                },
                data:{
                    ...data
                }
            })
        }catch(error){
            if(error instanceof PrismaClientKnownRequestError){
                if(error.code == 'P2025'){
                    throw new NotFoundException("Usuario a actualizar no encontrada")
                }
            }
        }
    }

    async delete(id: number): Promise<user>{
        try{
            return await this.db.user.update({
                where:{
                    iduser: id,
                    NOT:{
                        is_deleted: 1
                    }
                },
                data:{
                    is_deleted: 1
                }
            })
        }catch(error){
            if(error instanceof PrismaClientKnownRequestError){
                if(error.code == "P2025"){
                    throw new NotFoundException("Usuario no encontrado o fue eliminado")
                }
            }
        }
    }
}