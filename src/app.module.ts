import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TiendaModule } from './tienda/tienda.module';
import { UserModule } from './user/user.module';
import { RolsModule } from './rol/rols.module';
import { AuthModule } from './auth/auth.module';
import { DepartmentsModule } from './department/departments.module';
import { SizesModule } from './size/size.module';
import { PersonalDataModule } from './personal_data/personal_data.module';
import { BillModule } from './bill/bill.module';
import { SaleModule } from './sale/sale.module';
import { SaleProductModule } from './sale_product/sale_product.module';
import { ProductModule } from './product/product.module';
import { StockModule } from './stock/stock.module';
import { ProductSizeModule } from './product_size/product_size.module';

@Module({
  imports: [TiendaModule, UserModule, RolsModule, AuthModule, DepartmentsModule, SizesModule, PersonalDataModule, BillModule, SaleModule, SaleProductModule, ProductModule, StockModule, ProductSizeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
