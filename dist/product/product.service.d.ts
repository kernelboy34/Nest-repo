import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
export declare class ProductService {
    private productRepository;
    constructor(productRepository: typeof Product);
    create(data: CreateProductDto): Promise<Product>;
    findAll(): Promise<Product[]>;
    findOne(id: number): Promise<Product>;
    paginateProducts(take: number, skip: number): Promise<Product[]>;
    update(id: number, data: UpdateProductDto, file?: Express.Multer.File): Promise<{
        message: string;
        status: number;
        data: UpdateProductDto;
    }>;
    remove(id: number): Promise<{
        message: string;
        status: number;
    }>;
}
