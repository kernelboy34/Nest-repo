import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class StockService {
    private db;
    constructor(db: PrismaService);
    create(data: CreateStockDto): Promise<{
        is_deleted: number | null;
        products_idproducts: number;
        quantity: number | null;
        branches_idbranches: number;
        idstocks: number;
    }>;
    findAll(): Promise<{
        is_deleted: number | null;
        products_idproducts: number;
        quantity: number | null;
        branches_idbranches: number;
        idstocks: number;
    }[]>;
    findOne(id: number): Promise<{
        name: string | null;
        is_deleted: number | null;
        idproducts: number;
        imageUrl: string | null;
        unitPrice: import("@prisma/client/runtime/library").Decimal | null;
    }>;
    update(id: number, data: UpdateStockDto): Promise<{
        is_deleted: number | null;
        products_idproducts: number;
        quantity: number | null;
        branches_idbranches: number;
        idstocks: number;
    }>;
    remove(id: number): Promise<{
        is_deleted: number | null;
        products_idproducts: number;
        quantity: number | null;
        branches_idbranches: number;
        idstocks: number;
    }>;
}
