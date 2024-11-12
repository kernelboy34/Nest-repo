import { CreateProductSizeDto } from './dto/create-product_size.dto';
import { UpdateProductSizeDto } from './dto/update-product_size.dto';
import { ProductSize } from './entities/product_size.entity';
export declare class ProductSizeService {
    private productsizeRepository;
    constructor(productsizeRepository: typeof ProductSize);
    create(data: CreateProductSizeDto): Promise<ProductSize>;
    findAll(): Promise<ProductSize[]>;
    findOne(id: number): Promise<ProductSize>;
    update(id: number, data: UpdateProductSizeDto): Promise<{
        message: string;
        status: number;
        data: UpdateProductSizeDto;
    }>;
    remove(id: number): Promise<{
        message: string;
        status: number;
    }>;
}
