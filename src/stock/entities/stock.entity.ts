import { Column, PrimaryKey, AutoIncrement, AllowNull, Table, DataType, ForeignKey, HasMany, Model, BelongsTo } from "sequelize-typescript";
import { Department } from "src/department/entities/department.entity";
import { Product } from "src/product/entities/product.entity";

@Table({
    tableName:"existencias",
    timestamps:false
})
export class Stock extends Model{
    @PrimaryKey
    @AutoIncrement
    @AllowNull(false)
    @Column(DataType.INTEGER)
    idstocks: number

    @ForeignKey(() => Department)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    branches_idbranches:number

    @ForeignKey(() => Product)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    products_idproducts: number

    @AllowNull(true)
    @Column(DataType.INTEGER)
    quantity:number

    @AllowNull(true)
    @Column({type:DataType.INTEGER, defaultValue:0})
    is_deleted: number

    @BelongsTo(() => Product)
    products: Product

    @BelongsTo(() => Department)
    departments: Department
}
