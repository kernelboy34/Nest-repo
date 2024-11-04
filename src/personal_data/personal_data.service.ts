import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePersonalDatumDto } from './dto/create-personal_datum.dto';
import { UpdatePersonalDatumDto } from './dto/update-personal_datum.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class PersonalDataService {
  constructor(private db: PrismaService){}
  async create(data: CreatePersonalDatumDto) {
    return await this.db.personal_data.create({
      data
    })
  }

  async findAll() {
    return await this.db.personal_data.findMany()
  }

  async findOne(id: number) {
    const data_found = await this.db.personal_data.findFirst({
      where:{
        idpersonal_data: id
      }
    })
    if(!data_found){
      throw new NotFoundException("Datos personales no encontrado")
    }

    return data_found
  }

  async update(id: number, data: UpdatePersonalDatumDto) {
    try{
      return await this.db.personal_data.update({
        where:{
          idpersonal_data: id,
          NOT:{
            is_deleted: 1
          }
        },
        data
      })
    }catch(error){
      if(error instanceof PrismaClientKnownRequestError){
        if(error.code == 'P2025'){
          throw new NotFoundException("Datos personales no encontrado")
        }
      }
    }
  }

  async remove(id: number) {
    try{
      return await this.db.personal_data.update({
        where:{
          idpersonal_data: id,
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
        if(error.code == 'P2025'){
          throw new NotFoundException("Datos personales no encontrado o fue eliminado")
        }
      }
    }
  }
}
