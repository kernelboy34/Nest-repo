import { StockService } from './stock.service';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
export declare class StockController {
    private readonly stockService;
    constructor(stockService: StockService);
    create(createStockDto: CreateStockDto): Promise<{
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
    findOne(id: string): Promise<{
        name: string | null;
        is_deleted: number | null;
        idproducts: number;
        imageUrl: string | null;
        unitPrice: import("@prisma/client/runtime/library").Decimal | null;
    }>;
    update(id: string, updateStockDto: UpdateStockDto): Promise<{
        is_deleted: number | null;
        products_idproducts: number;
        quantity: number | null;
        branches_idbranches: number;
        idstocks: number;
    }>;
    remove(id: string): Promise<{
        is_deleted: number | null;
        products_idproducts: number;
        quantity: number | null;
        branches_idbranches: number;
        idstocks: number;
    }>;
}
