import { Table, Column, Model, PrimaryKey, AutoIncrement, ForeignKey, DataType, AllowNull, BelongsTo, HasMany, HasOne } from "sequelize-typescript";
import { PersonalDatum } from "src/personal_data/entities/personal_datum.entity";
import { Rol } from "src/rol/entity/rol.entity";

@Table({
    tableName: 'usuarios',
    timestamps: false,
})
export class User extends Model{
    @PrimaryKey
    @AutoIncrement
    @AllowNull(false)
    @Column(DataType.INTEGER)
    iduser: number

    @ForeignKey(() => Rol)
    @Column(DataType.INTEGER)
    rols_idrols: number

    @AllowNull(false)
    @Column(DataType.STRING)
    name: string

    @AllowNull(false)
    @Column(DataType.STRING)
    email:string

    @AllowNull(false)
    @Column(DataType.STRING(255))
    password: string

    @Column({defaultValue: 0, type: DataType.INTEGER})
    is_deleted: number

    @BelongsTo(() => Rol, 'rols_idrols')
    role:Rol

    @HasOne(() => PersonalDatum)
    personsalData: PersonalDatum
}
