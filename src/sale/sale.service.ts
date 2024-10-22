import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { PrismaService } from 'src/prisma/prisma.service';

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
      throw new NotFoundException("Sale Not Found")
    }
    return saleFound
  }

  async update(id: number, data: UpdateSaleDto) {
    const saleFound = await this.db.sales.update({
      where:{
        idsales: id
      },
      data
    })
    if(!saleFound){
      throw new NotFoundException("Sale Not Found")
    }
  }

  async remove(id: number) {
    const saleFound = await this.db.sales.update({
      where:{
        idsales: id
      },
      data:{
        is_deleted: 1
      }
    })
    if(!saleFound){
      throw new NotFoundException("Sale Not Found")
    }
    return saleFound
  }
}
