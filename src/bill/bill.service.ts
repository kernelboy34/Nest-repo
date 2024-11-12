import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateBillDto } from './dto/create-bill.dto';
import { UpdateBillDto } from './dto/update-bill.dto';
import { Bill } from './entities/bill.entity';
import { Op } from 'sequelize';

@Injectable()
export class BillService {
  constructor(
    @Inject("BILLS_REPOSITORY")
    private billRepository: typeof Bill
  ){}

  async create(data: CreateBillDto): Promise<Bill>{
    return await this.billRepository.create({
      sales_idsales: data.sales_idsales,
      total_price: data.total_price
    })
  }

  async findAll(): Promise<Bill[]>{
    return await this.billRepository.findAll({
      where:{
        is_deleted:{
          [Op.ne]: 1
        }
      }
    })
  }

  async findOne(id: number) {
    const billFound = await this.billRepository.findOne({
      where:{
        idbills:{
          [Op.eq]: id
        }
      }
    })
    if(!billFound){
      throw new NotFoundException("Factura no encontrada")
    }
    return billFound
  }

  async update(id: number, data: UpdateBillDto) {
    const billUpdate = await this.billRepository.update(data, {
      where:{
        idbills:{
          [Op.eq]: id
        }
      }
    })

    if(!billUpdate){
      throw new NotFoundException("Factura a actualizar no encontrado")
    }

    return {message: "Factura actualizado correctamente", status: 200, data}
  }

  async remove(id: number) {
    const [billDelete] = await this.billRepository.update(
      { is_deleted: 1},
      {
        where:{
          idbills: {
            [Op.eq]: id
          },
          is_deleted:{
            [Op.ne]:1
          }
        }
      }
    )
    if(billDelete === 0){
      throw new NotFoundException("Factura a eliminar no encontrado")
    }
    return {message: "Factura eliminado correctamente", status: 200}
  }
}
