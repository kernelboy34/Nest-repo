import { Model } from "sequelize-typescript";
import { User } from "src/user/entity/user.entity";
export declare class Rol extends Model {
    idroles: number;
    name: string;
    is_deleted: number;
    users: User;
}
