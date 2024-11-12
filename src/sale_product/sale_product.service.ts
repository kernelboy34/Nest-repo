import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateSaleProductDto } from './dto/create-sale_product.dto';
import { UpdateSaleProductDto } from './dto/update-sale_product.dto';
import { SaleProduct } from './entities/sale_product.entity';
import { Op } from 'sequelize';

@Injectable()
export class SaleProductService {
  constructor(
    @Inject("SALE_PRODUCTS_REPOSITORY")
    private saleproductsRepository: typeof SaleProduct
  ){}
  async create(data: CreateSaleProductDto): Promise<SaleProduct>{
    return await this.saleproductsRepository.create({
      sales_idsales:data.sales_idsales,
      products_idproducts: data.products_idproducts,
      quantity: data.quantity,
      total_price: data.total_price
    })
  }

  async findAll(): Promise<SaleProduct[]>{
    return await this.saleproductsRepository.findAll({
      where:{
        is_deleted:{
          [Op.ne]:1
        }
      }
    })
  }

  async findOne(id: number) {
    const saleproductFound = await this.saleproductsRepository.findOne({
      where:{
        idsale_products:{
          [Op.eq]: id
        },
        is_deleted: {
          [Op.ne]: 1
        }
      }
    })
    if(!saleproductFound){
      throw new NotFoundException("Venta de producto no encontrado o fue eliminado")
    }
    return saleproductFound
  }

  async update(id: number, data: UpdateSaleProductDto) {
    const [saleproductsUpdate] = await this.saleproductsRepository.update(data,{
      where:{
        idsale_products:{
          [Op.eq]:id
        }
      }
    })
    if(saleproductsUpdate === 0){
      throw new NotFoundException("Venta de productos a actualizar no encontrada")
    }
    return {message: "Venta de productos actualizado correctamente", status: 200, data}
  }

  async remove(id: number) {
    const [saleproductsDelete] = await this.saleproductsRepository.update(
      {is_deleted: 1},
      {
        where:{
          idsale_products:{
            [Op.eq]:id
          },
          is_deleted:{
            [Op.ne]:1
          }
        }
      })
    if(saleproductsDelete === 0){
      throw new NotFoundException("Venta de productos no encontrado o fue eliminado")
    }
    return { message: "Venta de productos eliminado correctamente", status: 200 }
  }
}
