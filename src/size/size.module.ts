import { Module } from '@nestjs/common';
import { SizeService } from './size.service';
import { SizeController } from './size.controller';
import { RolesGuard } from 'src/rol/rols.guard';
import { SequelizeModule } from '@nestjs/sequelize';
import { Size } from './entities/size.entity';
import { sizeProvider } from './provider/size.provider';
import { SequelizeProvider } from 'src/sequelize/sequelize.provider';
import { RolsModule } from 'src/rol/rols.module';

@Module({
  controllers: [SizeController],
  providers: [SizeService, RolesGuard, ...sizeProvider],
  exports: [SizeService],
  imports: [SequelizeModule.forFeature([Size]), SequelizeProvider, RolsModule]
})
export class SizesModule {}
