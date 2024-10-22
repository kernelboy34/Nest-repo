import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductSizeDto } from './dto/create-product_size.dto';
import { UpdateProductSizeDto } from './dto/update-product_size.dto';
import { PrismaService } from 'src/prisma/prisma.service';

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
    return  await this.db.product_sizes.findMany() 
  }

  async findOne(id: number) {
    const productSizeFound = await this.db.product_sizes.findUnique({
      where:{
        idproduct_sizes:id
      }
    })
    if(!productSizeFound){
      throw new NotFoundException("Product Size Not Found")
    }
    return productSizeFound
  }

  async update(id: number, data: UpdateProductSizeDto) {
    const productSizeFound = await this.db.product_sizes.update({
      where:{
        idproduct_sizes:id
      },
      data
    })
    if(!productSizeFound){
      throw new NotFoundException("Product Size Not Found")
    }
  }

  async remove(id: number) {
    const productSizeFound = await this.db.product_sizes.update({
      where:{
        idproduct_sizes: id
      },
      data:{
        is_deleted: 1
      }
    })
    if(!productSizeFound){
      throw new NotFoundException("Product Size Not Found")
    }
    return productSizeFound
  }
}
