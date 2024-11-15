import { CreateSaleProductDto } from './dto/create-sale_product.dto';
import { UpdateSaleProductDto } from './dto/update-sale_product.dto';
import { SaleProduct } from './entities/sale_product.entity';
import { Sale } from 'src/sale/entities/sale.entity';
import { Product } from 'src/product/entities/product.entity';
export declare class SaleProductService {
    private saleproductsRepository;
    private saleRepository;
    private productRepository;
    constructor(saleproductsRepository: typeof SaleProduct, saleRepository: typeof Sale, productRepository: typeof Product);
    create(data: CreateSaleProductDto): Promise<SaleProduct>;
    findAll(): Promise<SaleProduct[]>;
    findOne(id: number): Promise<SaleProduct>;
    update(id: number, data: UpdateSaleProductDto): Promise<{
        message: string;
        status: number;
        data: UpdateSaleProductDto;
    }>;
    remove(id: number): Promise<{
        message: string;
        status: number;
    }>;
}
