import { Model } from "sequelize-typescript";
export declare class SaleProduct extends Model {
    idsale_products: any;
    sales_idsales: number;
    products_idproducts: number;
    quantity: number;
    total_price: number;
    is_deleted: number;
}
