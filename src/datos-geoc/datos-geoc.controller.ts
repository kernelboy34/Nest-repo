import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { DatosGeocService } from './datos-geoc.service';
import {DatosGeoc} from './datos-geoc.module';

@Controller('datos-geoc')
export class DatosGeocController {
  constructor(private readonly datosGeocService: DatosGeocService) {}

  // Crear un nuevo documento
  @Post()
  async create(@Body() datosGeoc: DatosGeoc): Promise<DatosGeoc> {
    return this.datosGeocService.create(datosGeoc);
  }

  // Obtener todos los documentos
  @Get()
  async findAll(): Promise<DatosGeoc[]> {
    return this.datosGeocService.findAll();
  }

  // Obtener un documento por su OBJECTID
  @Get(':objectId')
  async findOne(@Param('objectId') objectId: number): Promise<DatosGeoc> {
    return this.datosGeocService.findById(objectId);
  }

  // Actualizar un documento
  @Put(':objectId')
  async update(@Param('objectId') objectId: number, @Body() datosGeoc: Partial<DatosGeoc>): Promise<DatosGeoc> {
    return this.datosGeocService.update(objectId, datosGeoc);
  }

  // Eliminar un documento
  @Delete(':objectId')
  async delete(@Param('objectId') objectId: number): Promise<DatosGeoc> {
    return this.datosGeocService.delete(objectId);
  }
}
