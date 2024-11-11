import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class SaleService {
    private db;
    constructor(db: PrismaService);
    create(data: CreateSaleDto): Promise<{
        is_deleted: number | null;
        user_iduser: number;
        idsales: number;
        date_sale: Date;
        status: number | null;
    }>;
    findAll(): Promise<{
        is_deleted: number | null;
        user_iduser: number;
        idsales: number;
        date_sale: Date;
        status: number | null;
    }[]>;
    findOne(id: number): Promise<{
        is_deleted: number | null;
        user_iduser: number;
        idsales: number;
        date_sale: Date;
        status: number | null;
    }>;
    update(id: number, data: UpdateSaleDto): Promise<{
        is_deleted: number | null;
        user_iduser: number;
        idsales: number;
        date_sale: Date;
        status: number | null;
    }>;
    remove(id: number): Promise<{
        is_deleted: number | null;
        user_iduser: number;
        idsales: number;
        date_sale: Date;
        status: number | null;
    }>;
}
