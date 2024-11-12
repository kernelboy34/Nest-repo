import { Model } from "sequelize-typescript";
import { PersonalDatum } from "src/personal_data/entities/personal_datum.entity";
import { Rol } from "src/rol/entity/rol.entity";
export declare class User extends Model {
    iduser: number;
    rols_idrols: number;
    name: string;
    email: string;
    password: string;
    is_deleted: number;
    role: Rol;
    personsalData: PersonalDatum;
}
