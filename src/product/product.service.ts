import { Inject, Injectable, NotFoundException, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { Op, where } from 'sequelize';

@Injectable()
export class ProductService {
  constructor(
    @Inject("PRODUCTS_REPOSITORY")
    private productRepository: typeof Product
  ){}

  @UsePipes(new ValidationPipe({transform: true, transformOptions:{enableImplicitConversion:true}}))
  async create(data: CreateProductDto): Promise<Product>{
    return await this.productRepository.create({
      name: data.name,
      imageUrl: data.imageUrl,
      unitPrice: data.unitPrice
    })
  }

  @UsePipes(new ValidationPipe({transform: true, transformOptions:{enableImplicitConversion:true}}))
  async findAll(): Promise<Product[]>{
    return await this.productRepository.findAll({
      where:{
        is_deleted:{
          [Op.ne]: 1
        }
      }
    })
  }
  
  @UsePipes(new ValidationPipe({transform: true, transformOptions:{enableImplicitConversion:true}}))
  async findOne(id: number):Promise<Product>{
    const productFound = await this.productRepository.findOne({
      where:{
        idproducts:{
          [Op.eq]:id
        },
        is_deleted:{
          [Op.ne]: 1
        }
      }
    })
    if(!productFound){
      throw new NotFoundException("Producto no encontrado o fue eliminado")
    }
    return productFound
  }

  @UsePipes(new ValidationPipe({transform: true, transformOptions:{enableImplicitConversion:true}}))
  async paginateProducts(take: number, skip:number){
    return await this.productRepository.findAll({
      where:{
        is_deleted:{
          [Op.ne]:1
        },
      },
      offset: skip,
      limit: take
    })
  }

  @UsePipes(new ValidationPipe({transform: true, transformOptions:{enableImplicitConversion:true}}))
  async update(id: number, data: UpdateProductDto) {
    const [productUpdate] = await this.productRepository.update(data,{
      where:{
        idproducts:{
          [Op.eq]:id
        }
      }
    })
    
    if(productUpdate === 0){
      throw new NotFoundException("Producto no encontrado")
    }

    return {message: "Producto actualizado correctamente", status:200, data}
  }

  @UsePipes(new ValidationPipe({transform: true, transformOptions:{enableImplicitConversion:true}}))
  async remove(id: number) {
    const [productDelete] = await this.productRepository.update(
      {is_deleted: 1},
      {
        where:{
          idproducts:{
            [Op.eq]:id
          },
          is_deleted:{
            [Op.ne]: 1
          }
      }
    })
    if(productDelete === 0){
      throw new NotFoundException("Producto no encontrado o fue eliminado")
    }
    return {message: "Producto eliminado correctamente", status: 200}
  }
}
