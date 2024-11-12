import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { Sale } from './entities/sale.entity';
import { Op } from 'sequelize';

@Injectable()
export class SaleService {
  constructor(
    @Inject("SALES_REPOSITORY")
    private saleRepository: typeof Sale
  ){}
  async create(data: CreateSaleDto): Promise<Sale>{
    return await this.saleRepository.create({
      user_iduser: data.user_iduser,
      status: data.status
    })
  }

  async findAll(): Promise<Sale[]> {
    return await this.saleRepository.findAll({
      where:{
        is_deleted:{
          [Op.ne]:1
        }
      }
    })
  }

  async findOne(id: number):Promise<Sale> {
    const saleFound = await this.saleRepository.findOne({
      where:{
        idsales:{
          [Op.eq]:id
        },
        is_deleted:{
          [Op.ne]:1
        }
      }
    })

    if(!saleFound){
      throw new NotFoundException("Venta no encontrada")
    }

    return saleFound
  }

  async update(id: number, data: UpdateSaleDto){
    const [saleUpdate] = await this.saleRepository.update(data, {
      where:{
        idsales:{
          [Op.eq]:id
        }
      }
    })

    if(saleUpdate === 0){
      throw new NotFoundException("Venta a actualizar no encontrada o fue eliminada")
    }
    return {message: "Venta actualizada correctamente", status: 200, data}
  }

  async remove(id: number) {
    const [saleRemove] = await this.saleRepository.update(
      {is_deleted: 1},
      {
        where:{
          idsales:{
            [Op.eq]: id
          }
        }
      }
    )
    if(saleRemove === 0){
      throw new NotFoundException("Venta no encontrada")
    }
    
    return {message: "Venta eliminada correctamente", status: 200}
  }
}
