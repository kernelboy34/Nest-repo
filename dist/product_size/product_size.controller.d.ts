import { ProductSizeService } from './product_size.service';
import { CreateProductSizeDto } from './dto/create-product_size.dto';
import { UpdateProductSizeDto } from './dto/update-product_size.dto';
export declare class ProductSizeController {
    private readonly productSizeService;
    constructor(productSizeService: ProductSizeService);
    create(createProductSizeDto: CreateProductSizeDto): Promise<{
        is_deleted: number | null;
        idproduct_sizes: number;
        products_idproducts: number;
        sizes_idsizes: number;
        amount: import("@prisma/client/runtime/library").Decimal | null;
    }>;
    findAll(): Promise<{
        is_deleted: number | null;
        idproduct_sizes: number;
        products_idproducts: number;
        sizes_idsizes: number;
        amount: import("@prisma/client/runtime/library").Decimal | null;
    }[]>;
    findOne(id: string): Promise<{
        is_deleted: number | null;
        idproduct_sizes: number;
        products_idproducts: number;
        sizes_idsizes: number;
        amount: import("@prisma/client/runtime/library").Decimal | null;
    }>;
    update(id: string, updateProductSizeDto: UpdateProductSizeDto): Promise<{
        is_deleted: number | null;
        idproduct_sizes: number;
        products_idproducts: number;
        sizes_idsizes: number;
        amount: import("@prisma/client/runtime/library").Decimal | null;
    }>;
    remove(id: string): Promise<{
        is_deleted: number | null;
        idproduct_sizes: number;
        products_idproducts: number;
        sizes_idsizes: number;
        amount: import("@prisma/client/runtime/library").Decimal | null;
    }>;
}
