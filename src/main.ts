import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {TiendaModule} from '../src/tienda/tienda.module'
import * as dotenv from 'dotenv';
dotenv.config();
async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('tienda')
  app.enableCors()
  await app.listen(8000);
}
bootstrap();
