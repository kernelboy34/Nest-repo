import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('departments')
@ApiTags("Departamentos")
export class DepartmentsController {
  constructor(private readonly departmentsService: DepartmentsService) {}

  @UsePipes(new ValidationPipe({
    whitelist: true,
    transform: true
  }))
  @Post('create')
  @ApiOperation({summary: "Crear un nuevo departamento"})
  create(@Body() createDepartmentDto: CreateDepartmentDto) {
    return this.departmentsService.create(createDepartmentDto);
  }

  @Get('findAll')
  @ApiOperation({summary: "Listar todos los departamentos"})
  findAll() {
    return this.departmentsService.findAll();
  }

  @Get('findOne/:id')
  @ApiOperation({summary: "Listar un departamento segun el id"})
  findOne(@Param('id') id: string) {
    return this.departmentsService.findOne(+id);
  }

  @UsePipes(new ValidationPipe({
    whitelist:true,
    transform:true
  }))
  @Patch('updateOne/:id')
  @ApiOperation({summary: "Actualizar un departamento segun el id"})
  update(@Param('id') id: string, @Body() updateDepartmentDto: UpdateDepartmentDto) {
    return this.departmentsService.update(+id, updateDepartmentDto);
  }

  @UsePipes(new ValidationPipe({
    transform:true,
    whitelist: true
  }))
  @Delete('deleteOne/:id')
  @ApiOperation({summary: "Eliminar un departamento segun el id"})
  remove(@Param('id') id: string) {
    return this.departmentsService.delete(+id);
  }
}
