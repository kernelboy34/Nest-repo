import { Module } from "@nestjs/common"
import { SequelizeModule } from "@nestjs/sequelize"
import { Sequelize } from "sequelize-typescript"
import { Bill } from "src/bill/entities/bill.entity"
import { config } from "src/config/config"
import { Department } from "src/department/entities/department.entity"
import { PersonalDatum } from "src/personal_data/entities/personal_datum.entity"
import { Product } from "src/product/entities/product.entity"
import { ProductSize } from "src/product_size/entities/product_size.entity"
import { Rol } from "src/rol/entity/rol.entity"
import { Sale } from "src/sale/entities/sale.entity"
import { SaleProduct } from "src/sale_product/entities/sale_product.entity"
import { Size } from "src/size/entities/size.entity"
import { Stock } from "src/stock/entities/stock.entity"
import { User } from "src/user/entity/user.entity"


@Module({
    imports: [
        SequelizeModule.forRoot({
            dialect:'mysql',
            host: config.db_host,
            port: config.db_port,
            username: config.db_user,
            password: config.db_pass,
            database: config.db_database,
            models:[User, Rol, Size, Product, PersonalDatum, Stock, Department, Sale, Bill, SaleProduct, ProductSize],
            autoLoadModels: true,
            synchronize:true
        })
    ],
    exports:[SequelizeModule]
})
export class SequelizeProvider{}