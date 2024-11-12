import { Column, DataType, PrimaryKey, AutoIncrement, Model, AllowNull, Table, ForeignKey } from "sequelize-typescript";
import { Product } from "src/product/entities/product.entity";
import { Sale } from "src/sale/entities/sale.entity";

@Table({
    tableName:"ventaproductos",
    timestamps:false
})
export class SaleProduct extends Model {
    @PrimaryKey
    @AutoIncrement
    @AllowNull(false)
    @Column(DataType.INTEGER)
    idsale_products

    @AllowNull(false)
    @ForeignKey(() => Sale)
    @Column(DataType.INTEGER)
    sales_idsales: number 

    @AllowNull(false)
    @ForeignKey(() => Product)
    @Column(DataType.INTEGER)
    products_idproducts: number

    @AllowNull(false)
    @Column(DataType.INTEGER)
    quantity: number

    @AllowNull(true)
    @Column(DataType.DECIMAL)
    total_price: number

    @AllowNull(true)
    @Column(DataType.INTEGER)
    is_deleted: number
}
