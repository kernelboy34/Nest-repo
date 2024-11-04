import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductSizeDto } from './dto/create-product_size.dto';
import { UpdateProductSizeDto } from './dto/update-product_size.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class ProductSizeService {
  constructor(private db: PrismaService){}
  async create(data: CreateProductSizeDto) {
    try{
      return this.db.product_sizes.create({
        data
      })
    }catch(error){
      console.log(error)
    }
  }

  async findAll() {
    return await this.db.product_sizes.findMany() 
  }

  async findOne(id: number) {
    const productSizeFound = await this.db.product_sizes.findUnique({
      where:{
        idproduct_sizes:id
      }
    })
    if(!productSizeFound){
      throw new NotFoundException("Tamaño no encontrado")
    }
    return productSizeFound
  }

  async update(id: number, data: UpdateProductSizeDto) {
    try{
      return await this.db.product_sizes.update({
        where:{
          idproduct_sizes: id,
        },
        data
      })
    }catch(error){
      if(error instanceof PrismaClientKnownRequestError){
        if(error.code === 'P2025'){
          throw new NotFoundException("Tamaño del producto no encontrado")
        }
      }
    }
  }

  async remove(id: number) {
    try{
      return await this.db.product_sizes.update({
        where:{
          idproduct_sizes: id,
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
          throw new NotFoundException("Tamaño del producto no encontrado o fue eliminado")
        }
      }
    }
  }
}
