import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DatosGeoc } from './datos-geoc.module';

@Injectable()
export class DatosGeocService {
  constructor(@InjectModel('DatosGeoc') private datosGeocModel: Model<DatosGeoc>) {}

  // Crear un nuevo documento
  async create(datos: DatosGeoc): Promise<DatosGeoc> {
    const newDatos = new this.datosGeocModel(datos);
    return newDatos.save();
  }

  // Obtener todos los documentos
  async findAll(): Promise<DatosGeoc[]> {
    return this.datosGeocModel.find().exec();
  }

  // Obtener un documento por su OBJECTID
  async findById(objectId: number): Promise<DatosGeoc> {
    const datos = await this.datosGeocModel.findOne({ OBJECTID: objectId }).exec();
    if (!datos) {
      throw new NotFoundException(`DatosGeoc con OBJECTID ${objectId} no encontrado`);
    }
    return datos;
  }

  // Actualizar un documento
  async update(objectId: number, datos: Partial<DatosGeoc>): Promise<DatosGeoc> {
    const updatedDatos = await this.datosGeocModel
      .findOneAndUpdate({ OBJECTID: objectId }, datos, { new: true })
      .exec();
    if (!updatedDatos) {
      throw new NotFoundException(`DatosGeoc con OBJECTID ${objectId} no encontrado`);
    }
    return updatedDatos;
  }

  // Eliminar un documento
  async delete(objectId: number): Promise<DatosGeoc> {
    const deletedDatos = await this.datosGeocModel.findOneAndDelete({ OBJECTID: objectId }).exec();
    if (!deletedDatos) {
      throw new NotFoundException(`DatosGeoc con OBJECTID ${objectId} no encontrado`);
    }
    return deletedDatos;
  }
}
