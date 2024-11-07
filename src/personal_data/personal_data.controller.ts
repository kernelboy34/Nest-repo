import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { PersonalDataService } from './personal_data.service';
import { CreatePersonalDatumDto } from './dto/create-personal_datum.dto';
import { UpdatePersonalDatumDto } from './dto/update-personal_datum.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('personal_data')
@ApiTags("Datos Personales")
export class PersonalDataController {
  constructor(private readonly personalDataService: PersonalDataService) {}

  @UsePipes(new ValidationPipe({
    whitelist:true,
    transform:true
  }))
  @Post('create')
  @ApiOperation({summary:"Crear un nuevo dato personal"})
  create(@Body() data: CreatePersonalDatumDto) {
    return this.personalDataService.create(data);
  }

  @Get('findAll')
  @ApiOperation({summary: "Listar todos los datos personal"})
  findAll() {
    return this.personalDataService.findAll();
  }

  @Get('findOne/:id')
  @ApiOperation({summary: "Listar un dato personal segun el id"})
  findOne(@Param('id') id: string) {
    return this.personalDataService.findOne(+id);
  }

  @UsePipes(new ValidationPipe({
    whitelist:true,
    transform:true
  }))
  @Patch('updateOne/:id')
  @ApiOperation({summary: "Actualizar un dato personal segun el id"})
  update(@Param('id') id: string, @Body() updatePersonalDatumDto: UpdatePersonalDatumDto) {
    return this.personalDataService.update(+id, updatePersonalDatumDto);
  }

  @UsePipes(new ValidationPipe({
    whitelist:true,
    transform:true
  }))
  @Delete('deleteOne/:id')
  @ApiOperation({summary: "Eliminar un dato personal segun el id"})
  remove(@Param('id') id: string) {
    return this.personalDataService.remove(+id);
  }
}
