import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { Prisma, user } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserDto } from "./dto/createUser.dto";
import { UpdateUserDto } from "./dto/updateUser.dto";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

@Injectable()
export class UserService{
    constructor(private db: PrismaService){}

    async create(data: CreateUserDto):Promise<CreateUserDto>{
        try{
            return await this.db.user.create({
                data
            })
        }catch(error){
            console.log(error)
            if(error instanceof Prisma.PrismaClientKnownRequestError){
                if(error.code === "P2002"){
                    throw new ConflictException("Email is already used")
                }
            }
        }
    }

    async findOne(email: string):Promise<user>{
        const UserFound = await this.db.user.findUnique({
            where:{
                email:email
            }
        })
        if(!UserFound){
            throw new NotFoundException("User Not Found")
        }
        return await UserFound
    }

    async findAll():Promise<user[]>{
        return this.db.user.findMany({})
    }

    async update(data: UpdateUserDto, id: number): Promise<UpdateUserDto>{
        try{
            const userFoundToUdpate = await this.db.user.update({
                where:{
                    iduser:id
                },
                data:{
                    ...data
                }
            })
            if(!userFoundToUdpate){
                throw new NotFoundException("User Not Found")
            }
            return userFoundToUdpate
        }catch(error){
            if(error instanceof PrismaClientKnownRequestError){
                if(error.code === "P2002"){
                    throw new ConflictException("This email is already used, can't update this user")
                }
            }
        }
    }

    async delete(id: number): Promise<user>{
        const userFoundToDelete =  this.db.user.update({
            where:{
                iduser:id
            },
            data:{
                is_deleted: 1 
            }
        })

        if(!userFoundToDelete){
            throw new NotFoundException("User to delete not found")
        }
        return userFoundToDelete
    }
}