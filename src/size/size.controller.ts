import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, UseGuards } from '@nestjs/common';
import { SizeService } from './size.service';
import { CreateSizeDto } from './dto/create-size.dto';
import { UpdateSizeDto } from './dto/update-size.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { RolesGuard } from 'src/rol/rols.guard';
import { Roles } from 'src/rol/decorators/rol.decorator';

@Controller('sizes')
@ApiTags("Tamaños")
@UseGuards(RolesGuard)
export class SizeController {
  constructor(private readonly sizesService: SizeService) {}

  @UsePipes(new ValidationPipe({
    whitelist: true,
    transform: true
  }))
  @Post('create')
  @ApiOperation({summary: "Crear un tamaño"})
  @Roles('Administrador')
  create(@Body() createSizeDto: CreateSizeDto) {
    return this.sizesService.create(createSizeDto);
  }

  @ApiOperation({summary:"Listar todos los tamaños"})
  @Get('findAll')
  @Roles('Administrador', 'Usuario')
  findAll() {
    return this.sizesService.findAll();
  }

  @ApiOperation({summary: "Listar un tamaño por el id"})
  @Get('findOne/:id')
  @Roles('Administrador', 'Usuario')
  findOne(@Param('id') id: string) {
    return this.sizesService.findOne(+id);
  }

  @UsePipes(new ValidationPipe({
    whitelist: true,
    transform: true
  }))
  @Patch('updateOne/:id')
  @ApiOperation({summary: "Actualizar un un tamaño por segun el id"})
  @Roles('Administrador')
  update(@Param('id') id: string, @Body() updateSizeDto: UpdateSizeDto) {
    return this.sizesService.update(+id, updateSizeDto);
  }

  @UsePipes(new ValidationPipe({
    whitelist: true,
    transform: true
  }))
  @Delete('deleteOne/:id')
  @ApiOperation({summary: "Eliminar un tamaño segun el id "})
  @Roles('Administrador')
  remove(@Param('id') id: string) {
    return this.sizesService.delete(+id);
  }
}
