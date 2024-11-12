import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Response } from 'express';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(file: Express.Multer.File, createProductDto: CreateProductDto): Promise<import("./entities/product.entity").Product>;
    findAll(): Promise<import("./entities/product.entity").Product[]>;
    findOne(id: string): Promise<import("./entities/product.entity").Product>;
    paginateProduct(take: number, skip: number): Promise<import("./entities/product.entity").Product[]>;
    fetchByIdWithImage(id: string, res: Response): Promise<Response<any, Record<string, any>>>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<{
        message: string;
        status: number;
        data: UpdateProductDto;
    }>;
    remove(id: string): Promise<{
        message: string;
        status: number;
    }>;
}
