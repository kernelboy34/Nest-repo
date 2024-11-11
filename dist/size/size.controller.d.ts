import { SizeService } from './size.service';
import { CreateSizeDto } from './dto/create-size.dto';
import { UpdateSizeDto } from './dto/update-size.dto';
export declare class SizeController {
    private readonly sizesService;
    constructor(sizesService: SizeService);
    create(createSizeDto: CreateSizeDto): Promise<{
        name: string | null;
        is_deleted: number | null;
        idsizes: number;
    }>;
    findAll(): Promise<{
        name: string | null;
        is_deleted: number | null;
        idsizes: number;
    }[]>;
    findOne(id: string): Promise<{
        product_sizes: {
            is_deleted: number | null;
            idproduct_sizes: number;
            products_idproducts: number;
            sizes_idsizes: number;
            amount: import("@prisma/client/runtime/library").Decimal | null;
        }[];
    } & {
        name: string | null;
        is_deleted: number | null;
        idsizes: number;
    }>;
    update(id: string, updateSizeDto: UpdateSizeDto): Promise<{
        name: string | null;
        is_deleted: number | null;
        idsizes: number;
    }>;
    remove(id: string): Promise<{
        name: string | null;
        is_deleted: number | null;
        idsizes: number;
    }>;
}
