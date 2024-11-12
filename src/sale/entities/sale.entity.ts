import { Column, PrimaryKey, ForeignKey, AllowNull, DataType, Model, AutoIncrement, Table, BelongsTo, HasMany } from "sequelize-typescript";
import { Bill } from "src/bill/entities/bill.entity";
import { User } from "src/user/entity/user.entity";

@Table({
    tableName:"ventas",
    timestamps:false
})
export class Sale extends Model{
    @PrimaryKey
    @AutoIncrement
    @AllowNull(false)
    @Column(DataType.INTEGER)
    idsales: number

    @AllowNull(false)
    @ForeignKey(() => User)
    @Column(DataType.INTEGER)
    user_iduser: number

    @AllowNull(true)
    @Column({type:DataType.DATE, defaultValue: new Date()})
    date_sale:Date

    @AllowNull(true)
    @Column(DataType.INTEGER)
    status: number

    @AllowNull(true)
    @Column({type: DataType.INTEGER, defaultValue: 0})
    is_deleted: number

    @BelongsTo(() => User)
    user: User

    @HasMany(() => Bill)
    bills: Bill[]
}
