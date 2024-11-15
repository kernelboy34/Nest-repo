import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { Stock } from './entities/stock.entity';
import { Department } from 'src/department/entities/department.entity';
import { Product } from 'src/product/entities/product.entity';
export declare class StockService {
    private stockRepository;
    private departmentRepository;
    private productRepository;
    constructor(stockRepository: typeof Stock, departmentRepository: typeof Department, productRepository: typeof Product);
    create(data: CreateStockDto): Promise<Stock>;
    findAll(): Promise<Stock[]>;
    findOne(id: number): Promise<Stock>;
    update(id: number, data: UpdateStockDto): Promise<{
        message: string;
        status: number;
        data: UpdateStockDto;
    }>;
    remove(id: number): Promise<{
        message: string;
        status: number;
    }>;
}
