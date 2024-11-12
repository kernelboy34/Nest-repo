import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/createUser.dto";
import { UpdateUserDto } from "./dto/updateUser.dto";
import { User } from "./entity/user.entity";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUser: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(email: string): Promise<User>;
    findOneToLogin(email: string): Promise<User>;
    updateOne(id: number, data: UpdateUserDto): Promise<{
        message: string;
        status: number;
        data: UpdateUserDto;
    }>;
    deleteOne(id: number): Promise<{
        message: string;
        status: number;
    }>;
}
