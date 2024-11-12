import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { productProvider } from './provide/product.provide';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from './entities/product.entity';
import { SequelizeProvider } from 'src/sequelize/sequelize.provider';
import { RolsModule } from 'src/rol/rols.module';


@Module({
  controllers: [ProductController],
  providers: [ProductService, ...productProvider],
  exports:[ProductService],
  imports: [SequelizeModule.forFeature([Product]), SequelizeProvider, RolsModule]
})
export class ProductModule {}
