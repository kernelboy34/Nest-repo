import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBillDto } from './dto/create-bill.dto';
import { UpdateBillDto } from './dto/update-bill.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BillService {
  constructor(private db: PrismaService){}
  async create(data: CreateBillDto) {
    return await this.db.bills.create({
      data
    })
  }

  async findAll() {
    return await this.db.bills.findMany()
  }

  async findOne(id: number) {
    const billFound = await this.db.bills.findUnique({
      where:{
        idbills:id
      }
    })
    if(!billFound){
      throw new NotFoundException("Bill Not Found")
    }
    return billFound
  }

  async update(id: number, data: UpdateBillDto) {
    const billFound = await this.db.bills.update({
      where:{
        idbills:id
      },
      data
    })
    if(!billFound){
      throw new NotFoundException("Bill Not Found")
    }
    return billFound
  }

  async remove(id: number) {
    const billFound = this.db.bills.update({
      where:{
        idbills:id
      },
      data:{
        is_deleted:1
      }
    })
    if(!billFound){
      throw new NotFoundException("Bill NOt Found")
    }
    return billFound
  }
}
