import { Injectable, NotFoundException, UsePipes} from '@nestjs/common';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class StockService {
  constructor(private db: PrismaService){}
  async create(data: CreateStockDto) {
    try{
      return this.db.stocks.create({
        data
      })
    }catch(error){
      console.log(error)
    }
  }

  async findAll() {
    return  await this.db.stocks.findMany() 
  }

  async findOne(id: number) {
    const stockFound = await this.db.products.findUnique({
      where:{
        idproducts: id
      }
    })
    if(!stockFound){
      throw new NotFoundException("Cantidad no encontrada")
    }
    return stockFound
  }

  async update(id: number, data: UpdateStockDto) {
    try{
      return await this.db.stocks.update({
        where:{
          idstocks: id,
        },
        data
      })
    }catch(error){
      if(error instanceof PrismaClientKnownRequestError){
        if(error.code == 'P2025'){
          throw new NotFoundException("Cantidad a actualizar no encontrada")
        }
      }
    }
  }

  async remove(id: number) {
    try{
      return await this.db.stocks.update({
        where:{
          idstocks: id
        },
        data:{
          is_deleted: 1
        }
      })
    }catch(error){
      if(error instanceof PrismaClientKnownRequestError){
        if(error.code == 'P2025'){
          throw new NotFoundException("Cantidad no encontrada o fue eliminada")
        }
      }
    }
  }
}
