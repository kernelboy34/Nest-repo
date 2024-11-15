import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { Sale } from './entities/sale.entity';
import { User } from 'src/user/entity/user.entity';
export declare class SaleService {
    private saleRepository;
    private userRepository;
    constructor(saleRepository: typeof Sale, userRepository: typeof User);
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
