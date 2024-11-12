import { Module } from '@nestjs/common';
import { PersonalDataService } from './personal_data.service';
import { PersonalDataController } from './personal_data.controller';
import { personaldatasProvider } from './provider/personal_data.provider';
import { SequelizeProvider } from 'src/sequelize/sequelize.provider';
import { SequelizeModule } from '@nestjs/sequelize';
import { PersonalDatum } from './entities/personal_datum.entity';
import { RolsModule } from 'src/rol/rols.module';

@Module({
  controllers: [PersonalDataController],
  providers: [PersonalDataService, ...personaldatasProvider],
  imports:[
    SequelizeProvider, RolsModule, SequelizeModule.forFeature([PersonalDatum])
  ]
})
export class PersonalDataModule {}
