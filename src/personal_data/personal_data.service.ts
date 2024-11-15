import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePersonalDatumDto } from './dto/create-personal_datum.dto';
import { UpdatePersonalDatumDto } from './dto/update-personal_datum.dto';
import { PersonalDatum } from './entities/personal_datum.entity';
import { Op } from 'sequelize';
import { User } from 'src/user/entity/user.entity';


@Injectable()
export class PersonalDataService {
  constructor(
    @Inject("PERSONAL_DATAS_REPOSITORY")
    private personaldataRepository: typeof PersonalDatum,
    @Inject("USERS_REPOSITORY")
    private userRepository: typeof User
  ){}
  async create(data: CreatePersonalDatumDto): Promise<PersonalDatum>{
    const userExist = await this.userRepository.findByPk(data.user_iduser)
    if(!userExist){
      throw new NotFoundException("El Usuario no existe")
    }
    return await this.personaldataRepository.create({
      user_iduser: data.user_iduser,
      name: data.name,
      lastname: data.lastname,
      bank_account: data.bank_account,
      phone: data.phone,
      address: data.address
    })
  }

  async findAll(): Promise<PersonalDatum[]>{
    return await this.personaldataRepository.findAll({
      where:{
        is_deleted:{
          [Op.ne]:1
        }
      }
    })
  }

  async findOne(id: number) {
    const personaldataFound = await this.personaldataRepository.findOne({
      where:{
        idpersonal_data:{
          [Op.eq]:id
        }
      }
    })

    if(!personaldataFound){
      throw new NotFoundException("Datos personales no encontrado")
    }

    return personaldataFound
  }

  async update(id: number, data: UpdatePersonalDatumDto) {
    if(data.user_iduser){
      const userExist = await this.userRepository.findByPk(data.user_iduser)
      if(!userExist){
        throw new NotFoundException("El usuario no existe")
      }
    }
    
    const [personaldataUpdate] = await this.personaldataRepository.update(data,{
      where:{
        idpersonal_data:{
          [Op.eq]:id
        }
      }
    })

    if(personaldataUpdate === 0){
      throw new NotFoundException("Datos personales a actualizar no encontrado")
    }
    return {message: "Datos personales actualizado correctamente", status: 200, data}
  }

  async remove(id: number) {
    const [personaldataDelete] = await this.personaldataRepository.update(
      { is_deleted: 1 },
      {
        where:{
          idpersonal_data:{
            [Op.eq]: id 
          },
          is_deleted:{
            [Op.ne]: 1
          }
        }
      }
    )
    if(personaldataDelete === 0){
      throw new NotFoundException("Datos personales a eliminar no encontrado")
    }

    return {message: "Datos personales eliminado correctamente", status: 200}
  }
}
