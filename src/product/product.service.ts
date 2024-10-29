import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class ProductService {
  constructor(private db: PrismaService){}
  async create(data: CreateProductDto) {
    try{
      return this.db.products.create({
        data
      })
    }catch(error){
      console.log(error)
    }
  }

  async findAll() {
    return await this.db.products.findMany() 
  }

  async findOne(id: number) {
    const productFound = await this.db.products.findUnique({
      where:{
        idproducts:id
      }
    })
    if(!productFound){
      throw new NotFoundException("Product Not Found")
    }
    return productFound
  }

  async update(id: number, data: UpdateProductDto) {
    try{
      return await this.db.products.update({
        where:{
          idproducts:id
        },
        data
      })
    }catch(error){
      if(error instanceof PrismaClientKnownRequestError){
        if(error.code == 'P2025'){
          throw new NotFoundException("Product to update not found")
        }
      }
    }
  }
  async remove(id: number) {
    try{
      return await this.db.products.update({
        where:{
          idproducts:id
        },
        data:{
          is_deleted: 1
        }
      })
    }catch(error){
      if(error instanceof PrismaClientKnownRequestError){
        if(error.code == 'P2025'){
          throw new NotFoundException("Product to update not found")
        }
      }
    }
  }
}
