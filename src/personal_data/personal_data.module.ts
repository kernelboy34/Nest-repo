import { Module } from '@nestjs/common';
import { PersonalDataService } from './personal_data.service';
import { PersonalDataController } from './personal_data.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [PersonalDataController],
  providers: [PersonalDataService, PrismaService],
})
export class PersonalDataModule {}
