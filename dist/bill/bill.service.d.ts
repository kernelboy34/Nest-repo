import { CreateBillDto } from './dto/create-bill.dto';
import { UpdateBillDto } from './dto/update-bill.dto';
import { Bill } from './entities/bill.entity';
import { Sale } from 'src/sale/entities/sale.entity';
export declare class BillService {
    private billRepository;
    private saleRepository;
    constructor(billRepository: typeof Bill, saleRepository: typeof Sale);
    create(data: CreateBillDto): Promise<Bill>;
    findAll(): Promise<Bill[]>;
    findOne(id: number): Promise<Bill>;
    update(id: number, data: UpdateBillDto): Promise<{
        message: string;
        status: number;
        data: UpdateBillDto;
    }>;
    remove(id: number): Promise<{
        message: string;
        status: number;
    }>;
}
