import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TiendaModule } from './tienda/tienda.module';
import { UserModule } from './user/user.module';
import { RolsModule } from './rols/rols.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TiendaModule, UserModule, RolsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
