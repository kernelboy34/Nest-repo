import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductSizeDto } from './dto/create-product_size.dto';
import { UpdateProductSizeDto } from './dto/update-product_size.dto';
import { ProductSize } from './entities/product_size.entity';
import { Op } from 'sequelize';

@Injectable()
export class ProductSizeService {
  constructor(
    @Inject("PRODUCTSIZES_REPOSITORY")
    private productsizeRepository: typeof ProductSize
  ){}
  async create(data: CreateProductSizeDto): Promise<ProductSize>{
    return await this.productsizeRepository.create({
      products_idproducts: data.products_idproducts,
      sizes_idsizes: data.sizes_idsizes,
      amount: data.amount
    })
  }

  async findAll(): Promise<ProductSize[]>{
    return await this.productsizeRepository.findAll({
      where:{
        is_deleted:{
          [Op.ne]: 1
        }
      }
    })
  }

  async findOne(id: number) {
    const productsizeFound = await this.productsizeRepository.findOne({
      where:{
        idproduct_sizes:{
          [Op.eq]: id
        },
        is_deleted:{
          [Op.ne]: 1 
        }
      }
    })
    if(!productsizeFound){
      throw new NotFoundException("Tamaño de producto no encontrado")
    }
    return productsizeFound
  }

  async update(id: number, data: UpdateProductSizeDto) {
    const [productsizeFound] = await this.productsizeRepository.update(data, {
      where:{
        idproduct_sizes:{
          [Op.eq]: id
        }
      }
    })
    if(productsizeFound === 0){
      throw new NotFoundException("Tamaño de productos a actualizar no encontrado")
    }
    return {message: "Tamaño de productos actaulizado correctamente", status: 200, data}
  }

  async remove(id: number) {
    const [productsizeDelete] = await this.productsizeRepository.update(
      { is_deleted: 1},
      {
        where:{
          idproduct_sizes:{
            [Op.eq]: id
          }
        }
      }
    )
    if(productsizeDelete === 0){ 
      throw new NotFoundException("Tamaño de productos a eliminar no encontrado")
    }

    return {message: "Tamaño de productos eliminado correctamente", status: 200}
  }
}
