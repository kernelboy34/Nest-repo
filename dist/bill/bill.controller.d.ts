import { BillService } from './bill.service';
import { CreateBillDto } from './dto/create-bill.dto';
import { UpdateBillDto } from './dto/update-bill.dto';
export declare class BillController {
    private readonly billService;
    constructor(billService: BillService);
    create(createBillDto: CreateBillDto): Promise<{
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
    findOne(id: string): Promise<{
        is_deleted: number | null;
        sales_idsales: number;
        total_price: import("@prisma/client/runtime/library").Decimal | null;
        idbills: number;
    }>;
    update(id: string, updateBillDto: UpdateBillDto): Promise<{
        is_deleted: number | null;
        sales_idsales: number;
        total_price: import("@prisma/client/runtime/library").Decimal | null;
        idbills: number;
    }>;
    remove(id: string): Promise<{
        is_deleted: number | null;
        sales_idsales: number;
        total_price: import("@prisma/client/runtime/library").Decimal | null;
        idbills: number;
    }>;
}
