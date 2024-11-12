import { Model } from "sequelize-typescript";
import { Bill } from "src/bill/entities/bill.entity";
import { User } from "src/user/entity/user.entity";
export declare class Sale extends Model {
    idsales: number;
    user_iduser: number;
    date_sale: Date;
    status: number;
    is_deleted: number;
    user: User;
    bills: Bill[];
}
