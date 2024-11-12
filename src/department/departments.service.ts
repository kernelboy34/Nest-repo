import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { Department } from './entities/department.entity';
import { Op } from 'sequelize';

@Injectable()
export class DepartmentsService {
  constructor(
    @Inject("DEPARTMENTS_REPOSITORY")
    private deparmentRepository: typeof Department
  ){}
  async create(data: CreateDepartmentDto): Promise<Department>{
    return await this.deparmentRepository.create({
      name: data.name,
      address: data.address
    })
  }

  async findAll(): Promise<Department[]>{
    return await this.deparmentRepository.findAll({
      where:{
        is_deleted:{
          [Op.ne]:1
        }
      }
    })
  }

  async findOne(id: number) {
    const departmentFound = await this.deparmentRepository.findOne({
      where:{
        iddepartments:{
          [Op.eq]:id
        }
      }
    })
    if(!departmentFound){
      throw new NotFoundException("Departamento no encontrado")
    }

    return departmentFound
  }

  async update(id: number, data: UpdateDepartmentDto) {
    const [departmentUpdate] = await this.deparmentRepository.update(data, {
      where:{
        iddepartments:{
          [Op.eq]: id
        }
      }
    })
    if(departmentUpdate === 0){
      throw new NotFoundException("Departamento a actualizar no encontrado")
    }
    return {message: "Departamento actualizado correctamente", status: 200, data}
  }

  async delete(id: number) {
    const [departmentDelete] = await this.deparmentRepository.update(
      { is_deleted : 1},
      {
      where:{
        iddepartments:{
          [Op.eq]: id
        },
        is_deleted:{
          [Op.ne]: 1
        }
      }
    })
    if(departmentDelete === 0){
      throw new NotFoundException("Departamento a eliminar no encontrado")
    }

    return {message: "Departamento eliminado correctamente", status: 200}
  }
}
