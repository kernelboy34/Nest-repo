import { CreateProductSizeDto } from './dto/create-product_size.dto';
import { UpdateProductSizeDto } from './dto/update-product_size.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ProductSizeService {
    private db;
    constructor(db: PrismaService);
    create(data: CreateProductSizeDto): Promise<{
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
    findOne(id: number): Promise<{
        is_deleted: number | null;
        idproduct_sizes: number;
        products_idproducts: number;
        sizes_idsizes: number;
        amount: import("@prisma/client/runtime/library").Decimal | null;
    }>;
    update(id: number, data: UpdateProductSizeDto): Promise<{
        is_deleted: number | null;
        idproduct_sizes: number;
        products_idproducts: number;
        sizes_idsizes: number;
        amount: import("@prisma/client/runtime/library").Decimal | null;
    }>;
    remove(id: number): Promise<{
        is_deleted: number | null;
        idproduct_sizes: number;
        products_idproducts: number;
        sizes_idsizes: number;
        amount: import("@prisma/client/runtime/library").Decimal | null;
    }>;
}
