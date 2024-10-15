import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DatosGeocController } from './datos-geoc.controller'; // Asegúrate de importar el controlador
import { DatosGeocSchema } from './schemas/datos-geoc.schema'; // Asegúrate de importar el esquema correcto

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'DatosGeoc', schema: DatosGeocSchema }]),
  ],
  controllers: [DatosGeocController],
})
export class DatosGeoc{}