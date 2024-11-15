import { Module } from '@nestjs/common';
import { ProductSizeService } from './product_size.service';
import { ProductSizeController } from './product_size.controller';
import { productsizeProvider } from './provider/product_size.provider';
import { SequelizeModule } from '@nestjs/sequelize';
import { ProductSize } from './entities/product_size.entity';
import { RolsModule } from 'src/rol/rols.module';
import { productProvider } from 'src/product/provide/product.provide';
import { sizeProvider } from 'src/size/provider/size.provider';
import { ProductModule } from 'src/product/product.module';
import { SizesModule } from 'src/size/size.module';

@Module({
  controllers: [ProductSizeController],
  providers: [ProductSizeService, ...productsizeProvider, ...productProvider, ...sizeProvider],
  imports:[SequelizeModule.forFeature([ProductSize]), SequelizeModule, RolsModule, ProductModule, SizesModule]
})
export class ProductSizeModule {}
