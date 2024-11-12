
import { Column, DataType, AllowNull, PrimaryKey, AutoIncrement, Table, BelongsTo, Model, HasMany } from "sequelize-typescript";
import { ProductSize } from "src/product_size/entities/product_size.entity";
import { Stock } from "src/stock/entities/stock.entity";
import { User } from "src/user/entity/user.entity";

@Table({
    tableName:"productos",
    timestamps:false
})
export class Product extends Model{
    @PrimaryKey
    @AutoIncrement
    @AllowNull(false)
    @Column(DataType.INTEGER)
    idproducts: number

    @AllowNull(true)
    @Column(DataType.STRING(45))
    name:string

    @AllowNull(true)
    @Column(DataType.STRING(255))
    imageUrl: string

    @AllowNull(true)
    @Column(DataType.DECIMAL)
    unitPrice: number

    @AllowNull(true)
    @Column({type: DataType.INTEGER, defaultValue: 0})
    is_deleted: number

    @HasMany(() => ProductSize)
    productSizes: ProductSize[];

    @HasMany(() => Stock)
    stocks: Stock
}
