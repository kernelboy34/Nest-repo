import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DatosGeoc } from './datos-geoc/datos-geoc.module'; // Asegúrate de crear este módulo

@Module({
  imports: [
    MongooseModule.forRoot('meme aca  cadena mongo'),
    DatosGeoc,
  ],
})
export class AppModule {}