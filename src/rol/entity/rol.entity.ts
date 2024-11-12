import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType, AllowNull, Default, BelongsTo, HasMany } from "sequelize-typescript";
import { User } from "src/user/entity/user.entity";

@Table({
    tableName: 'roles',
    timestamps: false,
})
export class Rol extends Model{
    @PrimaryKey
    @AutoIncrement
    @AllowNull(false)
    @Column(DataType.INTEGER)
    idroles: number;

    @AllowNull(false)
    @Column(DataType.STRING(45))
    name: string;

    @AllowNull(true)
    @Column({
        defaultValue: 0,
        type: DataType.INTEGER,
    })
    is_deleted: number;

    @HasMany(() => User)
    users: User;
}
