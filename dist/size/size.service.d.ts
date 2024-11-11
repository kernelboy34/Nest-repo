import { CreateSizeDto } from './dto/create-size.dto';
import { UpdateSizeDto } from './dto/update-size.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class SizeService {
    private db;
    constructor(db: PrismaService);
    create(data: CreateSizeDto): Promise<{
        name: string | null;
        is_deleted: number | null;
        idsizes: number;
    }>;
    findAll(): Promise<{
        name: string | null;
        is_deleted: number | null;
        idsizes: number;
    }[]>;
    findOne(id: number): Promise<{
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
    update(id: number, data: UpdateSizeDto): Promise<{
        name: string | null;
        is_deleted: number | null;
        idsizes: number;
    }>;
    delete(id: number): Promise<{
        name: string | null;
        is_deleted: number | null;
        idsizes: number;
    }>;
}
