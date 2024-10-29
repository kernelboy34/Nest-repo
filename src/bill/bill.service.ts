import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBillDto } from './dto/create-bill.dto';
import { UpdateBillDto } from './dto/update-bill.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

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
    try{
      return await this.db.bills.update({
        where:{
          idbills:id
        },
        data
      })
    }catch(error){
      if(error instanceof PrismaClientKnownRequestError){
        if(error.code == 'P2025'){
          throw new NotFoundException("Bill Not Found")
        }
      } 
    }
  }

  async remove(id: number) {
    try{
      return await this.db.bills.update({
        where:{
          idbills:id
        },
        data:{
          is_deleted: 1
        }
      })
    }catch(error){
      if(error instanceof PrismaClientKnownRequestError){
        if(error.code == 'P2025'){
          throw new NotFoundException("Bill Not Found")
        }
      } 
    }
  }
}
