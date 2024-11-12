import { Column, PrimaryKey, ForeignKey, AllowNull, DataType, AutoIncrement, HasMany, Table, Model, HasOne, BelongsTo } from "sequelize-typescript";
import { User } from "src/user/entity/user.entity";

@Table({
    tableName:"datosPersonales",
    timestamps:false
})
export class PersonalDatum extends Model{
    @PrimaryKey
    @AutoIncrement
    @AllowNull(false)
    @Column(DataType.INTEGER)
    idpersonal_data:number

    @ForeignKey(() => User)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    user_iduser:number

    @AllowNull(false)
    @Column(DataType.STRING(45))
    name: string
    
    @AllowNull(false)
    @Column(DataType.STRING(45))
    lastname:string

    @AllowNull(false)
    @Column(DataType.STRING(45))
    bank_account:string

    @AllowNull(true)
    @Column(DataType.STRING(45))
    phone:string

    @AllowNull(true)
    @Column(DataType.STRING(45))
    address: string

    @AllowNull(true)
    @Column({type:DataType.INTEGER, defaultValue: 0})
    is_deleted: number

    @BelongsTo(() => User)
    user:User
}
