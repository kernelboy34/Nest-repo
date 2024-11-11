import { SaleService } from './sale.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
export declare class SaleController {
    private readonly saleService;
    constructor(saleService: SaleService);
    create(createSaleDto: CreateSaleDto): Promise<{
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
    findOne(id: string): Promise<{
        is_deleted: number | null;
        user_iduser: number;
        idsales: number;
        date_sale: Date;
        status: number | null;
    }>;
    update(id: string, updateSaleDto: UpdateSaleDto): Promise<{
        is_deleted: number | null;
        user_iduser: number;
        idsales: number;
        date_sale: Date;
        status: number | null;
    }>;
    remove(id: string): Promise<{
        is_deleted: number | null;
        user_iduser: number;
        idsales: number;
        date_sale: Date;
        status: number | null;
    }>;
}
