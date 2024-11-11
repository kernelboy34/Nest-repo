import { CreateBillDto } from './dto/create-bill.dto';
import { UpdateBillDto } from './dto/update-bill.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class BillService {
    private db;
    constructor(db: PrismaService);
    create(data: CreateBillDto): Promise<{
        is_deleted: number | null;
        sales_idsales: number;
        total_price: import("@prisma/client/runtime/library").Decimal | null;
        idbills: number;
    }>;
    findAll(): Promise<{
        sales: {
            is_deleted: number | null;
            user_iduser: number;
            idsales: number;
            date_sale: Date;
            status: number | null;
        };
        is_deleted: number;
        sales_idsales: number;
        total_price: import("@prisma/client/runtime/library").Decimal;
        idbills: number;
    }[]>;
    findOne(id: number): Promise<{
        is_deleted: number | null;
        sales_idsales: number;
        total_price: import("@prisma/client/runtime/library").Decimal | null;
        idbills: number;
    }>;
    update(id: number, data: UpdateBillDto): Promise<{
        is_deleted: number | null;
        sales_idsales: number;
        total_price: import("@prisma/client/runtime/library").Decimal | null;
        idbills: number;
    }>;
    remove(id: number): Promise<{
        is_deleted: number | null;
        sales_idsales: number;
        total_price: import("@prisma/client/runtime/library").Decimal | null;
        idbills: number;
    }>;
}
