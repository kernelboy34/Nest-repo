import { StockService } from './stock.service';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
export declare class StockController {
    private readonly stockService;
    constructor(stockService: StockService);
    create(createStockDto: CreateStockDto): Promise<import("./entities/stock.entity").Stock>;
    findAll(): Promise<import("./entities/stock.entity").Stock[]>;
    findOne(id: number): Promise<import("./entities/stock.entity").Stock>;
    update(id: number, updateStockDto: UpdateStockDto): Promise<{
        message: string;
        status: number;
        data: UpdateStockDto;
    }>;
    remove(id: number): Promise<{
        message: string;
        status: number;
    }>;
}
