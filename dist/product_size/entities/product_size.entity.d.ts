import { Model } from "sequelize-typescript";
import { Product } from "src/product/entities/product.entity";
import { Size } from "src/size/entities/size.entity";
export declare class ProductSize extends Model {
    idproduct_sizes: number;
    products_idproducts: number;
    sizes_idsizes: number;
    amount: number;
    is_deleted: number;
    size: Size;
    product: Product;
}
