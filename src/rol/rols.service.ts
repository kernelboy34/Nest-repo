import { Injectable, NotFoundException} from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateRolsDto } from "./dto/rols.dto";
import { rols } from "@prisma/client";
import { UpdateRolsDto } from "./dto/rolsupdate.dto";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

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

    async update(data : UpdateRolsDto, id: number): Promise<UpdateRolsDto>{
        try{
            return await this.db.rols.update({
                where: {
                    idrols: id
                },
                data
            })
        }catch(error){
            if(error instanceof PrismaClientKnownRequestError){
                if(error.code == 'P2025'){
                    throw new NotFoundException("Rol Not found")
                }
            }
        }
    }

    async delete(id: number){
        try{
            return await this.db.rols.update({
                where:{
                    idrols: id
                },
                data:{
                    is_deleted: 1
                }
            })
        }catch(error){
            if(error instanceof PrismaClientKnownRequestError){
                if(error.code == 'P2025'){
                    throw new NotFoundException("Rols to delete not found")
                }
            }
        }
    }
}