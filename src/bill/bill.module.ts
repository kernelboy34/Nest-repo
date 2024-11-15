import { Module } from '@nestjs/common';
import { BillService } from './bill.service';
import { BillController } from './bill.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { RolsModule } from 'src/rol/rols.module';
import { SequelizeProvider } from 'src/sequelize/sequelize.provider';
import { Bill } from './entities/bill.entity';
import { billProvider } from './provider/bill.provide';
import { SaleModule } from 'src/sale/sale.module';
import { saleProvider } from 'src/sale/provide/sale.provide';

@Module({
  controllers: [BillController],
  providers: [BillService, ...billProvider, ...saleProvider],
  imports: [RolsModule,SequelizeModule.forFeature([Bill]), SequelizeProvider, SaleModule]
})
export class BillModule {}
