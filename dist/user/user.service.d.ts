import { user } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserDto } from "./dto/createUser.dto";
import { UpdateUserDto } from "./dto/updateUser.dto";
export declare class UserService {
    private db;
    constructor(db: PrismaService);
    create(data: CreateUserDto): Promise<CreateUserDto>;
    findOne(email: string): Promise<Omit<user, 'password'>>;
    findAll(): Promise<Omit<user, 'password'>[]>;
    findUserRole(userId: number): Promise<{
        name: string;
        is_deleted: number | null;
        idrols: number;
    }>;
    findOneToLogin(email: string): Promise<user>;
    update(data: UpdateUserDto, id: number): Promise<UpdateUserDto>;
    delete(id: number): Promise<user>;
}
