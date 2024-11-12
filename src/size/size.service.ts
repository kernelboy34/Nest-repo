import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateSizeDto } from './dto/create-size.dto';
import { UpdateSizeDto } from './dto/update-size.dto';
import { Size } from './entities/size.entity';
import { Op } from 'sequelize';

@Injectable()
export class SizeService {
  constructor(
    @Inject("SIZES_REPOSITORY")
    private sizeRepository: typeof Size
  ){}

  async create(data: CreateSizeDto): Promise<Size>{
    return await this.sizeRepository.create({
      name: data.name
    })
  }

  async findAll():Promise<Size[]>{
    return await this.sizeRepository.findAll({
      where:{
        is_deleted:{
          [Op.ne]: 1
        }
      }
    })
  }

  async findOne(id: number):Promise<Size>{
      const sizeFound =  await this.sizeRepository.findOne({
        where:{
          idsizes:{
            [Op.eq]: id
          },
          is_deleted:{
            [Op.ne]: 1
          }
        }
      })
      if(!sizeFound){
        throw new NotFoundException("Tamaño no encontrado o fue eliminado")
      }

      return sizeFound
  }

  async update(id: number, data: UpdateSizeDto) {
    const [sizeUpdate] = await this.sizeRepository.update(data,{
      where:{
        idsizes:{
          [Op.eq]: id
        }
      }
    })
    if(sizeUpdate === 0){
      throw new NotFoundException("Tamaño no encontrado o fue eliminado")
    }

    return {message: "Tamaño actualizado correctamente", status: 200, data: data}
  }

  async delete(id: number) {
    const [sizeDeleted] = await this.sizeRepository.update(
      {is_deleted: 1},
      {
        where:{
          idsizes:{
            [Op.eq]: id
          },
          is_deleted:{
            [Op.ne]: 1
          }
        }
      }
    )
    if(sizeDeleted === 0){
      throw new NotFoundException("No se puede eliminar el tamaño porque no fue encontrado o fue eliminado")
    }
    return {message: "Tamaño eliminado correctamente", status: 200}
  }
}
