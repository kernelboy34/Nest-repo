import { Module } from '@nestjs/common';
import { BillService } from './bill.service';
import { BillController } from './bill.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { RolsModule } from 'src/rol/rols.module';
import { SequelizeProvider } from 'src/sequelize/sequelize.provider';
import { Bill } from './entities/bill.entity';
import { billProvider } from './provider/bill.provide';

@Module({
  controllers: [BillController],
  providers: [BillService, ...billProvider],
  imports: [RolsModule,SequelizeModule.forFeature([Bill]), SequelizeProvider]
})
export class BillModule {}
