import { BillService } from './bill.service';
import { CreateBillDto } from './dto/create-bill.dto';
import { UpdateBillDto } from './dto/update-bill.dto';
export declare class BillController {
    private readonly billService;
    constructor(billService: BillService);
    create(createBillDto: CreateBillDto): Promise<import("./entities/bill.entity").Bill>;
    findAll(): Promise<import("./entities/bill.entity").Bill[]>;
    findOne(id: number): Promise<import("./entities/bill.entity").Bill>;
    update(id: number, updateBillDto: UpdateBillDto): Promise<{
        message: string;
        status: number;
        data: UpdateBillDto;
    }>;
    remove(id: number): Promise<{
        message: string;
        status: number;
    }>;
}
