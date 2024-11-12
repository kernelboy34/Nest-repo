import { ConflictException, Inject, Injectable, NotFoundException} from "@nestjs/common";
import { CreateRolsDto } from "./dto/rols.dto";;
import { UpdateRolsDto } from "./dto/rolsupdate.dto";
import { Rol } from "./entity/rol.entity";
import { Op, where } from "sequelize";

@Injectable()
export class RolsService{
    constructor(
        @Inject("ROLS_REPOSITORY")
        private rolRepository: typeof Rol
    ){}

    async create(data: CreateRolsDto): Promise<Rol>{
        return await this.rolRepository.create({
            name: data.name,
            is_deleted: data.is_deleted
        })
    }

    async findOne(id: number){
        const userFound = await this.rolRepository.findOne({
            where:{
                idroles:{
                    [Op.eq]: id
                }
            }
        })
        if(!userFound){
            throw new NotFoundException("Usuario no encontrado")
        }

        return userFound
    }

    async findAll(): Promise<Rol[]>{
        return this.rolRepository.findAll({
            where:{
                is_deleted:{
                    [Op.ne]:1
                }
            }
        })
    }

    async updateOne(data : UpdateRolsDto, id: number){
        const [userUpdated] =  await this.rolRepository.update(
            data,
            {
                where:{
                    idroles:{
                        [Op.eq]:id
                    },
                }
            }
        )
        if(userUpdated === 0){
            throw new NotFoundException("Rol a actualizar no encontrado")
        }
        return {message: "Rol actualizado correctamente", status: 200, data}
    }

    async deleteOne(id: number){
        const [userDeleted] = await this.rolRepository.update(
            {is_deleted: 1},
            {
                where:{
                    idroles:{
                        [Op.eq]:id
                    },
                    is_deleted:{
                        [Op.ne]:1
                    }
                }
            }
        )
        if(userDeleted === 0){
            throw new NotFoundException("Rol a eliminar no encontrado")
        }

        return { message: "Rol eliminado correctamente", status: 200 }
    }
}