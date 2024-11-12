import { SaleService } from './sale.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
export declare class SaleController {
    private readonly saleService;
    constructor(saleService: SaleService);
    create(createSaleDto: CreateSaleDto): Promise<import("./entities/sale.entity").Sale>;
    findAll(): Promise<import("./entities/sale.entity").Sale[]>;
    findOne(id: string): Promise<import("./entities/sale.entity").Sale>;
    update(id: string, updateSaleDto: UpdateSaleDto): Promise<{
        message: string;
        status: number;
        data: UpdateSaleDto;
    }>;
    remove(id: string): Promise<{
        message: string;
        status: number;
    }>;
}
