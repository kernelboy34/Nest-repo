import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateRolsDto } from "./dto/rols.dto";
import { rols } from "@prisma/client";
import { UpdateRolsDto } from "./dto/rolsupdate.dto";

@Injectable()
export class RolsService{
    constructor(private db: PrismaService){}


    async create(data: CreateRolsDto): Promise<CreateRolsDto>{
        return await this.db.rols.create({
            data
        })
    }

    async getOne(id: number): Promise<rols>{
        const rolsFound = await this.db.rols.findFirst({
            where:{
                idrols: id
            }
        })
        if(!rolsFound){
            throw new NotFoundException("Rols Not Found")
        }
        return rolsFound
    }

    async getAll(): Promise<rols[]>{
        return await this.db.rols.findMany()
    }
    async udpate(data : UpdateRolsDto, id: number): Promise<UpdateRolsDto>{
        const RolToUpdate =  await this.db.rols.update({
            where: {
                idrols: id
            },
            data
        })

        if(!RolToUpdate){
            throw new NotFoundException("Rol to update not found")
        }

        return RolToUpdate
    }

    async delete(id: number){
        const RolDeleteFound = await this.db.rols.update({
            where:{
                idrols: id
            },
            data:{
                is_deleted: 1
            }
        })

        if(!RolDeleteFound){
            throw new NotFoundException("Rol not found")
        }
        return RolDeleteFound
    }
}