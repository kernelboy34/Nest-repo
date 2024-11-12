import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { Sale } from './entities/sale.entity';
export declare class SaleService {
    private saleRepository;
    constructor(saleRepository: typeof Sale);
    create(data: CreateSaleDto): Promise<Sale>;
    findAll(): Promise<Sale[]>;
    findOne(id: number): Promise<Sale>;
    update(id: number, data: UpdateSaleDto): Promise<{
        message: string;
        status: number;
        data: UpdateSaleDto;
    }>;
    remove(id: number): Promise<{
        message: string;
        status: number;
    }>;
}
