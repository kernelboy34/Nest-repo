import { Column, PrimaryKey, ForeignKey, AllowNull, DataType, Model, Table, AutoIncrement, BelongsTo } from "sequelize-typescript";
import { Sale } from "src/sale/entities/sale.entity";

@Table({
    tableName: "facturas",
    timestamps: false
})
export class Bill extends Model {
    @PrimaryKey
    @AutoIncrement
    @AllowNull(false)
    @Column(DataType.INTEGER)
    idbills: number

    @AllowNull(false)
    @ForeignKey(() => Sale)
    @Column(DataType.INTEGER)
    sales_idsales: number

    @AllowNull(true)
    @Column(DataType.DECIMAL)
    total_price: number

    @AllowNull(true)
    @Column({type:DataType.INTEGER, defaultValue: 0})
    is_deleted: number

    @BelongsTo(() => Sale)
    sale: Sale
}
