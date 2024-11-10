import { ConflictException, Injectable, NotFoundException} from "@nestjs/common";
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

    async findOne(id: number): Promise<rols>{
        const rolsFound = await this.db.rols.findUnique({
            where:{
                idrols: id
            }
        })
        if(!rolsFound){
            throw new NotFoundException("Rol no encontrado")
        }
        return rolsFound
    }

    async findAll(): Promise<rols[]>{
        return await this.db.rols.findMany()
    }

    async updateOne(data : UpdateRolsDto, id: number): Promise<UpdateRolsDto>{
        try{
            return await this.db.rols.update({
                where: {
                    idrols: id,
                },
                data
            })
        }catch(error){
            if(error instanceof PrismaClientKnownRequestError){
                if(error.code == 'P2025'){
                    throw new NotFoundException("Rol no encontrado")
                }
            }
        }
    }

    async deleteOne(id: number){
        try{
            return await this.db.rols.update({
                where:{
                    idrols: id,
                    NOT:{
                        is_deleted: 1
                    }
                },
                data:{
                    is_deleted: 1
                }
            })
        }catch(error){
            console.log(error)
            if(error instanceof PrismaClientKnownRequestError){
                if(error.code == 'P2025'){
                    throw new NotFoundException("Rol no encontrado o fue eliminado")
                }
            }
        }
    }
}