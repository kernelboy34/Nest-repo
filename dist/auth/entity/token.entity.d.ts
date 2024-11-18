import { Model } from "sequelize-typescript";
import { User } from "src/user/entity/user.entity";
export declare class ResetToken extends Model {
    idtoken: number;
    user_iduser: number;
    usuario: User;
    token: string;
    expiresAt: Date;
    createdAt: Date;
}
