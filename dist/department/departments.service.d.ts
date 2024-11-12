import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';
import { Department } from './entities/department.entity';
export declare class DepartmentsService {
    private deparmentRepository;
    constructor(deparmentRepository: typeof Department);
    create(data: CreateDepartmentDto): Promise<Department>;
    findAll(): Promise<Department[]>;
    findOne(id: number): Promise<Department>;
    update(id: number, data: UpdateDepartmentDto): Promise<{
        message: string;
        status: number;
        data: UpdateDepartmentDto;
    }>;
    delete(id: number): Promise<{
        message: string;
        status: number;
    }>;
}
