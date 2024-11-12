import { Model } from 'sequelize-typescript';
import { ProductSize } from 'src/product_size/entities/product_size.entity';
export declare class Size extends Model {
    idsizes: number;
    name: string;
    is_deleted: number;
    productSizes: ProductSize[];
}
