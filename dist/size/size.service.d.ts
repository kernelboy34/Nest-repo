import { CreateSizeDto } from './dto/create-size.dto';
import { UpdateSizeDto } from './dto/update-size.dto';
import { Size } from './entities/size.entity';
export declare class SizeService {
    private sizeRepository;
    constructor(sizeRepository: typeof Size);
    create(data: CreateSizeDto): Promise<Size>;
    findAll(): Promise<Size[]>;
    findOne(id: number): Promise<Size>;
    update(id: number, data: UpdateSizeDto): Promise<{
        message: string;
        status: number;
        data: UpdateSizeDto;
    }>;
    delete(id: number): Promise<{
        message: string;
        status: number;
    }>;
}
