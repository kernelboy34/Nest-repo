import { Module } from '@nestjs/common';
import { SaleProductService } from './sale_product.service';
import { SaleProductController } from './sale_product.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { SaleProduct } from './entities/sale_product.entity';
import { SequelizeProvider } from 'src/sequelize/sequelize.provider';
import { RolsModule } from 'src/rol/rols.module';
import { saleproductProvider } from './provide/sale_product.provide';

@Module({
  controllers: [SaleProductController],
  providers: [SaleProductService, ...saleproductProvider],
  imports:[SequelizeModule.forFeature([SaleProduct]), SequelizeProvider, RolsModule]
})
export class SaleProductModule {}
