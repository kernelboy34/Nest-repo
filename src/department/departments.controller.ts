import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, UseGuards } from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { RolesGuard } from 'src/rol/rols.guard';
import { Roles } from 'src/rol/decorators/rol.decorator';

@ApiBearerAuth()
@Controller('departments')
@ApiTags("Departamentos")
@UseGuards(RolesGuard)
export class DepartmentsController {
  constructor(private readonly departmentsService: DepartmentsService) {}

  @UsePipes(new ValidationPipe({
    whitelist: true,
    transform: true
  }))
  @Post('create')
  @ApiOperation({summary: "Crear un nuevo departamento"})
  @Roles('Administrador')
  create(@Body() createDepartmentDto: CreateDepartmentDto) {
    return this.departmentsService.create(createDepartmentDto);
  }

  @Get('findAll')
  @ApiOperation({summary: "Listar todos los departamentos"})
  @Roles('Administrador', 'Usuario')
  findAll() {
    return this.departmentsService.findAll();
  }

  @Get('findOne/:id')
  @ApiOperation({summary: "Listar un departamento segun el id"})
  @Roles('Administrador', 'Usuario')
  findOne(@Param('id') id: string) {
    return this.departmentsService.findOne(+id);
  }

  @UsePipes(new ValidationPipe({
    whitelist:true,
    transform:true
  }))
  @Patch('updateOne/:id')
  @ApiOperation({summary: "Actualizar un departamento segun el id"})
  @Roles('Administrador')
  update(@Param('id') id: string, @Body() updateDepartmentDto: UpdateDepartmentDto) {
    return this.departmentsService.update(+id, updateDepartmentDto);
  }

  @UsePipes(new ValidationPipe({
    transform:true,
    whitelist: true
  }))
  @Delete('deleteOne/:id')
  @ApiOperation({summary: "Eliminar un departamento segun el id"})
  @Roles('Administrador')
  remove(@Param('id') id: string) {
    return this.departmentsService.delete(+id);
  }
}
