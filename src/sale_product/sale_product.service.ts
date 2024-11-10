import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSaleProductDto } from './dto/create-sale_product.dto';
import { UpdateSaleProductDto } from './dto/update-sale_product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class SaleProductService {
  constructor(private db: PrismaService){}
  async create(data: CreateSaleProductDto) {
    return await this.db.sale_products.create({
      data
    })
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
      throw new NotFoundException("Venta del producto no encontrado")
    }
    return saleProductFound
  }

  async update(id: number, data: UpdateSaleProductDto) {
    try{
      return await this.db.sale_products.update({
        where:{
          idsale_products: id,
          NOT:{
            is_deleted: 1
          }
        },
        data
      })
    }catch(error){
      if(error instanceof PrismaClientKnownRequestError){
        if(error.code === 'P2025'){
          throw new NotFoundException("Venta del producto no encontrado")
        }
      }
    }
  }

  async remove(id: number) {
    const saleFound = await this.db.sale_products.update({
      where:{
        idsale_products: id,
        NOT:{
          is_deleted: 1
        }
      },
      data:{
        is_deleted: 1
      }
    })
    if(!saleFound){
      throw new NotFoundException("Venta del producto no encontrada o fue eliminada")
    }
    return saleFound
  }
}
