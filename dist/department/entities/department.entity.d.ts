import { Model } from "sequelize-typescript";
import { Stock } from "src/stock/entities/stock.entity";
export declare class Department extends Model {
    iddepartments: any;
    name: string;
    address: string;
    is_deleted: number;
    stock: Stock[];
}
