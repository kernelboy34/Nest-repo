import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {TiendaModule} from '../src/tienda/tienda.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3008);
}
bootstrap();
