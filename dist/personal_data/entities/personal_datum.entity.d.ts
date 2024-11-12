import { Model } from "sequelize-typescript";
import { User } from "src/user/entity/user.entity";
export declare class PersonalDatum extends Model {
    idpersonal_data: number;
    user_iduser: number;
    name: string;
    lastname: string;
    bank_account: string;
    phone: string;
    address: string;
    is_deleted: number;
    user: User;
}
