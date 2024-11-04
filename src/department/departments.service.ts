import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class DepartmentsService {
  constructor(private db: PrismaService){}
  async create(data: CreateDepartmentDto): Promise<CreateDepartmentDto> {
    return await this.db.departments.create({
      data
    })
  }

  async findAll(): Promise<CreateDepartmentDto[]>{
    return await this.db.departments.findMany()
  }

  async findOne(id: number) {
    const DepartmentFound = await this.db.departments.findFirst({
      where:{
        iddepartments: id
      }
    })

    if(!DepartmentFound){
      throw new NotFoundException("Departamento no encontrado")
    }
    return DepartmentFound
  }

  async update(id: number, data: UpdateDepartmentDto) {
    try{
      return await this.db.departments.update({
        where:{
          iddepartments: id,
        },
        data
      })
    }catch(error){
      if(error instanceof PrismaClientKnownRequestError){
        if(error.code == 'P2025'){
          throw new NotFoundException("Departamento no encontrado")
        }
      }
    }
  }

  async delete(id: number) {
    try{
      return await this.db.departments.update({
        where:{
          iddepartments: id,
          NOT:{
            is_deleted: 1
          }
        },
        data:{
          is_deleted: 1
        }
      })
    }catch(error){
      if(error instanceof PrismaClientKnownRequestError){
        if(error.code == 'P2025'){
          throw new NotFoundException("Departamento no encontrado o fue eliminado")
        }
      }
    }
  }
}
