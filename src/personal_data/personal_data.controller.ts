import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, UseGuards } from '@nestjs/common';
import { PersonalDataService } from './personal_data.service';
import { CreatePersonalDatumDto } from './dto/create-personal_datum.dto';
import { UpdatePersonalDatumDto } from './dto/update-personal_datum.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { RolesGuard } from 'src/rol/rols.guard';
import { Roles } from 'src/rol/decorators/rol.decorator';

@ApiBearerAuth()
@Controller('personal_data')
@ApiTags("Datos Personales")
@UseGuards(RolesGuard)
export class PersonalDataController {
  constructor(private readonly personalDataService: PersonalDataService) {}

  @UsePipes(new ValidationPipe({
    whitelist:true,
    transform:true
  }))
  @Post('create')
  @ApiOperation({summary:"Crear un nuevo dato personal"})
  @Roles('Administrador')
  create(@Body() data: CreatePersonalDatumDto) {
    return this.personalDataService.create(data);
  }

  @Get('findAll')
  @ApiOperation({summary: "Listar todos los datos personal"})
  @Roles('Administrador', 'Usuario')
  findAll() {
    return this.personalDataService.findAll();
  }

  @Get('findOne/:id')
  @ApiOperation({summary: "Listar un dato personal segun el id"})
  @Roles('Administrador', 'Usuario')
  findOne(@Param('id') id: string) {
    return this.personalDataService.findOne(+id);
  }

  @UsePipes(new ValidationPipe({
    whitelist:true,
    transform:true
  }))
  @Patch('updateOne/:id')
  @ApiOperation({summary: "Actualizar un dato personal segun el id"})
  @Roles('Usuario')
  update(@Param('id') id: string, @Body() updatePersonalDatumDto: UpdatePersonalDatumDto) {
    return this.personalDataService.update(+id, updatePersonalDatumDto);
  }

  @UsePipes(new ValidationPipe({
    whitelist:true,
    transform:true
  }))
  @Delete('deleteOne/:id')
  @ApiOperation({summary: "Eliminar un dato personal segun el id"})
  @Roles('Administrador')
  remove(@Param('id') id: string) {
    return this.personalDataService.remove(+id);
  }
}
