import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, HasMany, BelongsTo } from 'sequelize-typescript';
import { ProductSize } from 'src/product_size/entities/product_size.entity';

@Table({
    tableName: 'tamanos',
    timestamps: false,
})
export class Size extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    idsizes: number;

    @Column({
        type: DataType.STRING(45),
        allowNull: true,
    })
    name: string;

    @Column({
        type: DataType.TINYINT,
        allowNull: true,
        defaultValue: 0,
    })
    is_deleted: number;

    @HasMany(() => ProductSize)
    productSizes: ProductSize[];
}
