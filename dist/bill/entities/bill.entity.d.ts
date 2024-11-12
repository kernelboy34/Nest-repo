import { Model } from "sequelize-typescript";
import { Sale } from "src/sale/entities/sale.entity";
export declare class Bill extends Model {
    idbills: number;
    sales_idsales: number;
    total_price: number;
    is_deleted: number;
    sale: Sale;
}
