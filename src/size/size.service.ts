import { ConflictException, Injectable, NotFoundException, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateSizeDto } from './dto/create-size.dto';
import { UpdateSizeDto } from './dto/update-size.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class SizeService {
  constructor(private db: PrismaService){}

  @UsePipes(new ValidationPipe({
    whitelist:true,
    transform: true
  }))
  async create(data: CreateSizeDto) {
    try{
      return await this.db.sizes.create({
        data
      })
    }catch(error){
      console.log(error)
    }
  }

  async findAll() {
    return await this.db.sizes.findMany()
  }

  async findOne(id: number) {
    return `This action returns a #${id} size`;
  }

  async update(id: number, data: UpdateSizeDto) {
    try{
      const sizeUpdate = await this.db.sizes.update({
        where:{
          idsizes: id
        },
        data
      })
      if(!sizeUpdate){
        throw new NotFoundException("Size Not Found")
      }
    }catch(error){
      console.log(error)
    }
  }

  async delete(id: number) {
    const sizeDelete = await this.db.sizes.update({
      where:{
        idsizes: id
      },
      data:{
        is_deleted: 1
      }
    })
    if(sizeDelete){
      throw new NotFoundException("Size Not Found")
    }
  }
}
