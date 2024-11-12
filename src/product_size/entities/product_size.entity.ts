import { Column, PrimaryKey, AutoIncrement, AllowNull, DataType, ForeignKey, HasMany, Model, BelongsTo, Table } from "sequelize-typescript";
import { Product } from "src/product/entities/product.entity";
import { Size } from "src/size/entities/size.entity";

@Table({
    tableName:"tamanoproductos",
    timestamps:false
})
export class ProductSize extends Model {
    @PrimaryKey
    @AutoIncrement
    @AllowNull(false)
    @Column(DataType.INTEGER)
    idproduct_sizes: number

    @AllowNull(false)
    @ForeignKey(() => Product)
    @Column(DataType.INTEGER)
    products_idproducts:number

    @AllowNull(false)
    @ForeignKey(() => Size)
    @Column(DataType.INTEGER)
    sizes_idsizes:number

    @AllowNull(false)
    @Column(DataType.DECIMAL)
    amount: number

    @AllowNull(true)
    @Column({type:DataType.INTEGER, defaultValue: 0})
    is_deleted: number

    @BelongsTo(() => Size)
    size: Size;

    @BelongsTo(() => Product)
    product: Product;
}
