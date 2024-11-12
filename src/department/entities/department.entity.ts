import { Column, PrimaryKey, Model, AllowNull, AutoIncrement , Table, DataType, BelongsTo, HasMany} from "sequelize-typescript";
import { Stock } from "src/stock/entities/stock.entity";

@Table({
    timestamps: false,
    tableName:"departamentos"
})
export class Department extends Model{
    @PrimaryKey
    @AutoIncrement
    @AllowNull(false)
    @Column(DataType.INTEGER)
    iddepartments

    @AllowNull(false)
    @Column(DataType.STRING(45))
    name:string

    @AllowNull(false)
    @Column(DataType.STRING(45))
    address: string

    @AllowNull(true)
    @Column({type: DataType.INTEGER, defaultValue: 0 })
    is_deleted: number

    @HasMany(() => Stock)
    stock: Stock[]
}