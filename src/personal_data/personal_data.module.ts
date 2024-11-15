import { Module } from '@nestjs/common';
import { PersonalDataService } from './personal_data.service';
import { PersonalDataController } from './personal_data.controller';
import { personaldatasProvider } from './provider/personal_data.provider';
import { SequelizeProvider } from 'src/sequelize/sequelize.provider';
import { SequelizeModule } from '@nestjs/sequelize';
import { PersonalDatum } from './entities/personal_datum.entity';
import { RolsModule } from 'src/rol/rols.module';
import { usersProvider } from 'src/user/providers/user.provider';
import { UserModule } from 'src/user/user.module';

@Module({
  controllers: [PersonalDataController],
  providers: [PersonalDataService, ...personaldatasProvider, ...usersProvider],
  imports:[
    SequelizeProvider, RolsModule, SequelizeModule.forFeature([PersonalDatum]), UserModule
  ]
})
export class PersonalDataModule {}
