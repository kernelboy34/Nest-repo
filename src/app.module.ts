import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TiendaModule } from './tienda/tienda.module';
import { UserModule } from './user/user.module';
import { RolsModule } from './rol/rols.module';
import { AuthModule } from './auth/auth.module';
import { DepartmentsModule } from './department/departments.module';
import { SizesModule } from './size/size.module';

@Module({
  imports: [TiendaModule, UserModule, RolsModule, AuthModule, DepartmentsModule, SizesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
