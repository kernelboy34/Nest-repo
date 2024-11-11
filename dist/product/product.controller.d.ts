import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Response } from 'express';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(file: Express.Multer.File, createProductDto: CreateProductDto): Promise<{
        name: string | null;
        is_deleted: number | null;
        idproducts: number;
        imageUrl: string | null;
        unitPrice: import("@prisma/client/runtime/library").Decimal | null;
    }>;
    findAll(): Promise<{
        name: string | null;
        is_deleted: number | null;
        idproducts: number;
        imageUrl: string | null;
        unitPrice: import("@prisma/client/runtime/library").Decimal | null;
    }[]>;
    findOne(id: string): Promise<{
        name: string | null;
        is_deleted: number | null;
        idproducts: number;
        imageUrl: string | null;
        unitPrice: import("@prisma/client/runtime/library").Decimal | null;
    }>;
    paginateProduct(take: number, skip: number): Promise<{
        name: string | null;
        is_deleted: number | null;
        idproducts: number;
        imageUrl: string | null;
        unitPrice: import("@prisma/client/runtime/library").Decimal | null;
    }[]>;
    fetchByIdWithImage(id: string, res: Response): Promise<Response<any, Record<string, any>>>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<{
        name: string | null;
        is_deleted: number | null;
        idproducts: number;
        imageUrl: string | null;
        unitPrice: import("@prisma/client/runtime/library").Decimal | null;
    }>;
    remove(id: string): Promise<{
        name: string | null;
        is_deleted: number | null;
        idproducts: number;
        imageUrl: string | null;
        unitPrice: import("@prisma/client/runtime/library").Decimal | null;
    }>;
}
