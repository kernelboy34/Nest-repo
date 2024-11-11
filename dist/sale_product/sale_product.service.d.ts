import { CreateSaleProductDto } from './dto/create-sale_product.dto';
import { UpdateSaleProductDto } from './dto/update-sale_product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class SaleProductService {
    private db;
    constructor(db: PrismaService);
    create(data: CreateSaleProductDto): Promise<{
        is_deleted: number | null;
        products_idproducts: number;
        sales_idsales: number;
        total_price: import("@prisma/client/runtime/library").Decimal | null;
        quantity: string;
        idsale_products: number;
    }>;
    findAll(): Promise<{
        is_deleted: number | null;
        products_idproducts: number;
        sales_idsales: number;
        total_price: import("@prisma/client/runtime/library").Decimal | null;
        quantity: string;
        idsale_products: number;
    }[]>;
    findOne(id: number): Promise<{
        is_deleted: number | null;
        products_idproducts: number;
        sales_idsales: number;
        total_price: import("@prisma/client/runtime/library").Decimal | null;
        quantity: string;
        idsale_products: number;
    }>;
    update(id: number, data: UpdateSaleProductDto): Promise<{
        is_deleted: number | null;
        products_idproducts: number;
        sales_idsales: number;
        total_price: import("@prisma/client/runtime/library").Decimal | null;
        quantity: string;
        idsale_products: number;
    }>;
    remove(id: number): Promise<{
        is_deleted: number | null;
        products_idproducts: number;
        sales_idsales: number;
        total_price: import("@prisma/client/runtime/library").Decimal | null;
        quantity: string;
        idsale_products: number;
    }>;
}
