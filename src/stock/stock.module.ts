import { Module } from '@nestjs/common';
import { StockService } from './stock.service';
import { StockController } from './stock.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { RolesGuard } from 'src/rol/rols.guard';

@Module({
  controllers: [StockController],
  providers: [StockService, PrismaService, RolesGuard],
})
export class StockModule {}
