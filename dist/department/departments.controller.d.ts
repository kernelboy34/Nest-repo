import { DepartmentsService } from './departments.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
export declare class DepartmentsController {
    private readonly departmentsService;
    constructor(departmentsService: DepartmentsService);
    create(createDepartmentDto: CreateDepartmentDto): Promise<CreateDepartmentDto>;
    findAll(): Promise<CreateDepartmentDto[]>;
    findOne(id: string): Promise<{
        name: string;
        is_deleted: number | null;
        address: string;
        iddepartments: number;
    }>;
    update(id: string, updateDepartmentDto: UpdateDepartmentDto): Promise<{
        name: string;
        is_deleted: number | null;
        address: string;
        iddepartments: number;
    }>;
    remove(id: string): Promise<{
        name: string;
        is_deleted: number | null;
        address: string;
        iddepartments: number;
    }>;
}
