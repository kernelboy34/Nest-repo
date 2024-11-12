import { Module } from '@nestjs/common';
import { SaleService } from './sale.service';
import { SaleController } from './sale.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Sale } from './entities/sale.entity';
import { SequelizeProvider } from 'src/sequelize/sequelize.provider';
import { saleProvider } from './provide/sale.provide';

@Module({
  controllers: [SaleController],
  providers: [SaleService, ...saleProvider],
  imports: [SequelizeModule.forFeature([Sale]), SequelizeProvider]
})
export class SaleModule {}
