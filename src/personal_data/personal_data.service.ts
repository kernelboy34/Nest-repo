import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePersonalDatumDto } from './dto/create-personal_datum.dto';
import { UpdatePersonalDatumDto } from './dto/update-personal_datum.dto';
import { PrismaService } from 'src/prisma/prisma.service';

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
      throw new NotFoundException("Personal Data Not Found")
    }

    return data_found
  }

  async update(id: number, data: UpdatePersonalDatumDto) {
    const data_found = await this.db.personal_data.update({
      where:{
        idpersonal_data: id
      },
      data
    })
    if(!data_found){
      throw new NotFoundException("Personal Data Not Found")
    }
    return data_found
  }

  async remove(id: number) {
    const data_found = this.db.personal_data.update({
      where:{
        idpersonal_data:id
      },
      data:{
        is_deleted: 1
      }
    })

    if(!data_found){
      throw new NotFoundException("Personal Data Not Found")
    }

    return data_found
  }
}
