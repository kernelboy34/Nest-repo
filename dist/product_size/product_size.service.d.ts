import { CreateProductSizeDto } from './dto/create-product_size.dto';
import { UpdateProductSizeDto } from './dto/update-product_size.dto';
import { ProductSize } from './entities/product_size.entity';
import { Product } from 'src/product/entities/product.entity';
import { Size } from 'src/size/entities/size.entity';
export declare class ProductSizeService {
    private productsizeRepository;
    private productRepository;
    private sizeRepository;
    constructor(productsizeRepository: typeof ProductSize, productRepository: typeof Product, sizeRepository: typeof Size);
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
