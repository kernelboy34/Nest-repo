import { Module } from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { DepartmentsController } from './departments.controller';
import { departmentsProvider } from './provider/departments.provider';
import { SequelizeModule } from '@nestjs/sequelize';
import { Department } from './entities/department.entity';
import { SequelizeProvider } from 'src/sequelize/sequelize.provider';
import { RolsModule } from 'src/rol/rols.module';

@Module({
  controllers: [DepartmentsController],
  providers: [DepartmentsService, ...departmentsProvider],
  imports: [SequelizeModule.forFeature([Department]), SequelizeProvider, RolsModule],
  exports:[DepartmentsService]
})
export class DepartmentsModule {}
