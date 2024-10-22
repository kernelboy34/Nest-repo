import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSaleProductDto } from './dto/create-sale_product.dto';
import { UpdateSaleProductDto } from './dto/update-sale_product.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SaleProductService {
  constructor(private db: PrismaService){}
  async create(data: CreateSaleProductDto) {
    try{
      return this.db.sale_products.create({
        data
      })
    }catch(error){
      console.log(error)
    }
  }

  async findAll() {
    return  await this.db.sale_products.findMany() 
  }

  async findOne(id: number) {
    const saleProductFound = await this.db.sale_products.findUnique({
      where:{
        idsale_products:id
      }
    })
    if(!saleProductFound){
      throw new NotFoundException("SaleProduct Not Found")
    }
    return saleProductFound
  }

  async update(id: number, data: UpdateSaleProductDto) {
    const saleProductFound = await this.db.sale_products.update({
      where:{
        idsale_products: id
      },
      data
    })
    if(!saleProductFound){
      throw new NotFoundException("SaleProduct Not Found")
    }
  }

  async remove(id: number) {
    const saleFound = await this.db.sale_products.update({
      where:{
        idsale_products: id
      },
      data:{
        is_deleted: 1
      }
    })
    if(!saleFound){
      throw new NotFoundException("SaleProduct Not Found")
    }
    return saleFound
  }
}
