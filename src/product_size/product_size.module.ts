import { Module } from '@nestjs/common';
import { ProductSizeService } from './product_size.service';
import { ProductSizeController } from './product_size.controller';
import { productsizeProvider } from './provider/product_size.provider';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductSize } from './entities/product_size.entity';
import { RolsModule } from 'src/rol/rols.module';

@Module({
  controllers: [ProductSizeController],
  providers: [ProductSizeService, ...productsizeProvider],
  imports:[SequelizeModule.forFeature([ProductSize]), SequelizeModule, RolsModule]
})
export class ProductSizeModule {}
