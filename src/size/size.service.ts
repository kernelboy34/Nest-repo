import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSizeDto } from './dto/create-size.dto';
import { UpdateSizeDto } from './dto/update-size.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class SizeService {
  constructor(private db: PrismaService){}

  async create(data: CreateSizeDto) {
    try{
      return await this.db.sizes.create({
        data
      })
    }catch(error){
      console.log(error)
    }
  }

  async findAll() {
    return await this.db.sizes.findMany()
  }

  async findOne(id: number) {
    try{
      return await this.db.sizes.findFirst({
        where:{
          idsizes: id
        },
        include:{
          product_sizes: true
        }
      });
    }catch(error){
      if(error instanceof PrismaClientKnownRequestError){
        if(error.code == 'P2025'){
          throw new NotFoundException("Tamaño no encontrado o fue eliminado")
        }
      }
    }
  }

  async update(id: number, data: UpdateSizeDto) {
    try{
      return await this.db.sizes.update({
        where:{
          idsizes: id,
        },
        data
      })
    }catch(error){
      if(error instanceof PrismaClientKnownRequestError){
        if(error.code === 'P2025'){
          throw new NotFoundException("Tamaño no encontrado")
        }
      }
    }
  }

  async delete(id: number) {
    try{
      return await this.db.sizes.update({
        where:{
          idsizes: id,
          NOT:{
            is_deleted:1
          }
        },
        data:{
          is_deleted: 1
        }
      })
    }catch(error){
      if(error instanceof PrismaClientKnownRequestError){
        if(error.code == 'P2025'){
          throw new NotFoundException("Tamaño no encontrado o fue eliminado")
        }
      }
    }
  }
}
