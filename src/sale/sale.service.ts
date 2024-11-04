import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class SaleService {
  constructor(private db: PrismaService){}
  async create(data: CreateSaleDto) {
    try{
      return this.db.sales.create({
        data
      })
    }catch(error){
      console.log(error)
    }
  }

  async findAll() {
    return  await this.db.sales.findMany() 
  }

  async findOne(id: number) {
    const saleFound = await this.db.sales.findUnique({
      where:{
        idsales:id
      }
    })
    if(!saleFound){
      throw new NotFoundException("Venta no encotrado")
    }
    return saleFound
  }

  async update(id: number, data: UpdateSaleDto) {
    try{
      return await this.db.sales.update({
        where:{
          idsales: id,
        },
        data
      })
    }catch(error){
      if(error instanceof PrismaClientKnownRequestError){
        if(error.code === 'P2025'){
          throw new NotFoundException("Venta no encontrado")
        }
      }
    }
  }

  async remove(id: number) {
    try{
      return await this.db.sales.update({
        where:{
          idsales: id,
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
        if(error.code === 'P2025'){
          throw new NotFoundException("Venta no fue encontrada o fue eliminada")
        }
      }
    }
  }
}
