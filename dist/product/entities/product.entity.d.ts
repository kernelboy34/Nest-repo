import { Model } from "sequelize-typescript";
import { ProductSize } from "src/product_size/entities/product_size.entity";
import { Stock } from "src/stock/entities/stock.entity";
export declare class Product extends Model {
    idproducts: number;
    name: string;
    imageUrl: string;
    unitPrice: number;
    is_deleted: number;
    productSizes: ProductSize[];
    stocks: Stock;
}
