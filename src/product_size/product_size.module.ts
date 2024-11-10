import { Module } from '@nestjs/common';
import { ProductSizeService } from './product_size.service';
import { ProductSizeController } from './product_size.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ProductSizeController],
  providers: [ProductSizeService, PrismaService],
})
export class ProductSizeModule {}
