import { Module } from '@nestjs/common';
import { StockService } from './stock.service';
import { StockController } from './stock.controller';
import { RolesGuard } from 'src/rol/rols.guard';
import { SequelizeModule } from '@nestjs/sequelize';
import { Stock } from './entities/stock.entity';
import { SequelizeProvider } from 'src/sequelize/sequelize.provider';
import { stockProvider } from './provider/stock.provider';
import { RolsModule } from 'src/rol/rols.module';
import { Product } from 'src/product/entities/product.entity';
import { Department } from 'src/department/entities/department.entity';
import { DepartmentsModule } from 'src/department/departments.module';
import { departmentsProvider } from 'src/department/provider/departments.provider';
import { ProductModule } from 'src/product/product.module';
import { productProvider } from 'src/product/provide/product.provide';

@Module({
  controllers: [StockController],
  providers: [StockService, RolesGuard, ...stockProvider, ...departmentsProvider, ...productProvider],
  imports:[SequelizeModule.forFeature([Stock, Product, Department]), SequelizeProvider, RolsModule, DepartmentsModule, ProductModule]
})
export class StockModule {}
