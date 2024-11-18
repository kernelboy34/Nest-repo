import { Table, Column, PrimaryKey, AutoIncrement, Model, DataType, AllowNull, BelongsTo, ForeignKey } from "sequelize-typescript";
import { User } from "src/user/entity/user.entity";

@Table({
    tableName: "historial_tokens",
    timestamps: false,
})
export class ResetToken extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    idtoken: number;

    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    user_iduser: number;

    @BelongsTo(() => User)
    usuario: User;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    token: string;

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    expiresAt: Date;

    @Column({
        type: DataType.DATE,
        allowNull: false,
        defaultValue: DataType.NOW,
    })
    createdAt: Date;
}
