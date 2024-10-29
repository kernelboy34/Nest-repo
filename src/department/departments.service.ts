import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { PrismaService } from 'src/prisma/prisma.service';

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
      throw new NotFoundException("Cannot found the department")
    }
    return DepartmentFound
  }

  async update(id: number, data: UpdateDepartmentDto) {
    const DepartmentUpdate = await this.db.departments.update({
      where:{
        iddepartments: id
      },
      data
    })
    if(!DepartmentUpdate){
      throw new NotFoundException("Department not found")
    }
    return await DepartmentUpdate
  }

  async delete(id: number) {
    const DepartmentDelete = await this.db.departments.update({
      where:{
        iddepartments:id
      },
      data:{
        is_deleted: 1
      }
    })
    if(!DepartmentDelete){
      throw new NotFoundException("Department to delete not found")
    }

    return await DepartmentDelete
  }
}
