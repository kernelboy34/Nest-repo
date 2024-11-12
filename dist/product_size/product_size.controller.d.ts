import { ProductSizeService } from './product_size.service';
import { CreateProductSizeDto } from './dto/create-product_size.dto';
import { UpdateProductSizeDto } from './dto/update-product_size.dto';
export declare class ProductSizeController {
    private readonly productSizeService;
    constructor(productSizeService: ProductSizeService);
    create(createProductSizeDto: CreateProductSizeDto): Promise<import("./entities/product_size.entity").ProductSize>;
    findAll(): Promise<import("./entities/product_size.entity").ProductSize[]>;
    findOne(id: string): Promise<import("./entities/product_size.entity").ProductSize>;
    update(id: string, updateProductSizeDto: UpdateProductSizeDto): Promise<{
        message: string;
        status: number;
        data: UpdateProductSizeDto;
    }>;
    remove(id: string): Promise<{
        message: string;
        status: number;
    }>;
}
