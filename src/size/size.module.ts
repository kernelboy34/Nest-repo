import { Module } from '@nestjs/common';
import { SizeService } from './size.service';
import { SizeController } from './size.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { RolesGuard } from 'src/rol/rols.guard';

@Module({
  controllers: [SizeController],
  providers: [SizeService, PrismaService, RolesGuard],
  exports:[SizeService]
})
export class SizesModule {}
