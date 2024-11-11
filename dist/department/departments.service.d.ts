import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class DepartmentsService {
    private db;
    constructor(db: PrismaService);
    create(data: CreateDepartmentDto): Promise<CreateDepartmentDto>;
    findAll(): Promise<CreateDepartmentDto[]>;
    findOne(id: number): Promise<{
        name: string;
        is_deleted: number | null;
        address: string;
        iddepartments: number;
    }>;
    update(id: number, data: UpdateDepartmentDto): Promise<{
        name: string;
        is_deleted: number | null;
        address: string;
        iddepartments: number;
    }>;
    delete(id: number): Promise<{
        name: string;
        is_deleted: number | null;
        address: string;
        iddepartments: number;
    }>;
}
