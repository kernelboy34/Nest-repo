import { Module } from '@nestjs/common';
import { SizeService } from './size.service';
import { SizesController } from './size.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [SizesController],
  providers: [SizeService, PrismaService],
  exports:[SizeService]
})
export class SizesModule {}
