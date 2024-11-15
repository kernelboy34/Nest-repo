import { Module } from '@nestjs/common';
import { SaleService } from './sale.service';
import { SaleController } from './sale.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Sale } from './entities/sale.entity';
import { SequelizeProvider } from 'src/sequelize/sequelize.provider';
import { saleProvider } from './provide/sale.provide';
import { usersProvider } from 'src/user/providers/user.provider';
import { UserModule } from 'src/user/user.module';

@Module({
  controllers: [SaleController],
  providers: [SaleService, ...saleProvider, ...usersProvider],
  imports: [SequelizeModule.forFeature([Sale]), SequelizeProvider, UserModule],
  exports: [SaleModule]
})
export class SaleModule {}
