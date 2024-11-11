import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/createUser.dto";
import { UpdateUserDto } from "./dto/updateUser.dto";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUser: CreateUserDto): Promise<CreateUserDto>;
    findAll(): Promise<Omit<{
        rols_idrols: number;
        name: string;
        email: string;
        password: string;
        is_deleted: number | null;
        iduser: number;
    }, "password">[]>;
    findOne(email: string): Promise<Omit<{
        rols_idrols: number;
        name: string;
        email: string;
        password: string;
        is_deleted: number | null;
        iduser: number;
    }, "password">>;
    findOneToLogin(email: string): Promise<{
        rols_idrols: number;
        name: string;
        email: string;
        password: string;
        is_deleted: number | null;
        iduser: number;
    }>;
    updateOne(id: number, data: UpdateUserDto): Promise<UpdateUserDto>;
    deleteOne(id: number): Promise<{
        rols_idrols: number;
        name: string;
        email: string;
        password: string;
        is_deleted: number | null;
        iduser: number;
    }>;
}
