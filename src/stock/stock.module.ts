import { Module } from '@nestjs/common';
import { StockService } from './stock.service';
import { StockController } from './stock.controller';
import { RolesGuard } from 'src/rol/rols.guard';
import { SequelizeModule } from '@nestjs/sequelize';
import { Stock } from './entities/stock.entity';
import { SequelizeProvider } from 'src/sequelize/sequelize.provider';
import { stockProvider } from './provider/stock.provider';
import { RolsModule } from 'src/rol/rols.module';

@Module({
  controllers: [StockController],
  providers: [StockService, RolesGuard, ...stockProvider],
  imports:[SequelizeModule.forFeature([Stock]), SequelizeProvider, RolsModule]
})
export class StockModule {}
