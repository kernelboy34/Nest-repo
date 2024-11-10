import { Module } from '@nestjs/common';
import { SaleProductService } from './sale_product.service';
import { SaleProductController } from './sale_product.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [SaleProductController],
  providers: [SaleProductService, PrismaService],
})
export class SaleProductModule {}
