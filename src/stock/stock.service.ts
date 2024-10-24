import { Injectable, NotFoundException, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StockService {
  constructor(private db: PrismaService){}
  @UsePipes(new ValidationPipe({
    whitelist:true,
    transform: true
  }))
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

  @UsePipes(new ValidationPipe({
    whitelist: true,
    transform: true
  }))
  async findOne(id: number) {
    const stockFound = await this.db.products.findUnique({
      where:{
        idproducts:id
      }
    })
    if(!stockFound){
      throw new NotFoundException("stock Not Found")
    }
    return stockFound
  }


  @UsePipes(new ValidationPipe({
    whitelist: true,
    transform: true
  }))
  async update(id: number, data: UpdateStockDto) {
    const productFound = await this.db.stocks.update({
      where:{
        idstocks:id
      },
      data
    })
    if(!productFound){
      throw new NotFoundException("stock Not Found")
    }
  }

  async remove(id: number) {
    const productFound = await this.db.stocks.update({
      where:{
        idstocks: id
      },
      data:{
        is_deleted: 1
      }
    })
    if(!productFound){
      throw new NotFoundException("stock Not Found")
    }
    return productFound
  }
}
