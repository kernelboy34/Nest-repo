import { SizeService } from './size.service';
import { CreateSizeDto } from './dto/create-size.dto';
import { UpdateSizeDto } from './dto/update-size.dto';
export declare class SizeController {
    private readonly sizesService;
    constructor(sizesService: SizeService);
    create(createSizeDto: CreateSizeDto): Promise<import("./entities/size.entity").Size>;
    findAll(): Promise<import("./entities/size.entity").Size[]>;
    findOne(id: number): Promise<import("./entities/size.entity").Size>;
    update(id: number, updateSizeDto: UpdateSizeDto): Promise<{
        message: string;
        status: number;
        data: UpdateSizeDto;
    }>;
    remove(id: number): Promise<{
        message: string;
        status: number;
    }>;
}
