import { CreateUserDto } from "./dto/createUser.dto";
import { UpdateUserDto } from "./dto/updateUser.dto";
import { User } from "./entity/user.entity";
export declare class UserService {
    private userRepository;
    constructor(userRepository: typeof User);
    create(data: CreateUserDto): Promise<User>;
    findOne(email: string): Promise<User>;
    findAll(): Promise<User[]>;
    findUserRole(userId: number): Promise<User>;
    findOneToLogin(email: string): Promise<User>;
    update(data: UpdateUserDto, id: number): Promise<{
        message: string;
        status: number;
        data: UpdateUserDto;
    }>;
    delete(id: number): Promise<{
        message: string;
        status: number;
    }>;
}
