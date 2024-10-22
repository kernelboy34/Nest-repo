import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';

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
    return  await this.db.products.findMany() 
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
    const productFound = await this.db.products.update({
      where:{
        idproducts:id
      },
      data
    })
    if(!productFound){
      throw new NotFoundException("Product Not Found")
    }
  }
  async remove(id: number) {
    const productFound = await this.db.product_sizes.update({
      where:{
        idproduct_sizes: id
      },
      data:{
        is_deleted: 1
      }
    })
    if(!productFound){
      throw new NotFoundException("Product Not Found")
    }
    return productFound
  }
}
