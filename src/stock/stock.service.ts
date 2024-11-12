import { Inject, Injectable, NotFoundException, UsePipes} from '@nestjs/common';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { Stock } from './entities/stock.entity';
import { Op } from 'sequelize';

@Injectable()
export class StockService {
  constructor(
    @Inject("STOCKS_REPOSITORY")
    private stockRepository: typeof Stock
  ){}
  async create(data: CreateStockDto): Promise<Stock>{
    return await this.stockRepository.create({
      branches_idbranches: data.branches_idbranches,
      products_idproducts: data.products_idproducts,
      quantity: data.quantity
    })
  }

  async findAll(): Promise<Stock[]>{
    return await this.stockRepository.findAll({
      where:{
        is_deleted:{
          [Op.ne]:1
        }
      }
    })
  }

  async findOne(id: number) {
    const stockFound = await this.stockRepository.findOne({
      where:{
        idstocks:{
          [Op.eq]: id
        },
        is_deleted:{
          [Op.ne]: 1
        }
      }
    })
    if(!stockFound){
      throw new NotFoundException("Existencia no encontrada")
    }
    return stockFound
  }

  async update(id: number, data: UpdateStockDto) {
    const [stockUpdate] = await this.stockRepository.update(data,{
      where:{
        idstocks:{
          [Op.eq]:id
        }
      }
    })

    if(stockUpdate === 0){
      throw new NotFoundException("Existencia no encontrada o fue eliminada")
    }
    return {message: "Existencia actualizado correctamente", status: 200, data: data}
  }

  async remove(id: number) {
    const [stockDelete] = await this.stockRepository.update(
      { is_deleted: 1 },
      {
        where:{
          idstocks:{
            [Op.eq]:id
          },
          is_deleted: {
            [Op.ne]: 1
          }
        }
      }
    )
    if(stockDelete === 0){
      throw new NotFoundException("Existencia a eliminar no encontrada")
    }
    return {message: "Existencia eliminado correctamente", status: 200}
  }
}
