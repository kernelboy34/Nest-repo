import { SaleProductService } from './sale_product.service';
import { CreateSaleProductDto } from './dto/create-sale_product.dto';
import { UpdateSaleProductDto } from './dto/update-sale_product.dto';
export declare class SaleProductController {
    private readonly saleProductService;
    constructor(saleProductService: SaleProductService);
    create(createSaleProductDto: CreateSaleProductDto): Promise<{
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
    findOne(id: string): Promise<{
        is_deleted: number | null;
        products_idproducts: number;
        sales_idsales: number;
        total_price: import("@prisma/client/runtime/library").Decimal | null;
        quantity: string;
        idsale_products: number;
    }>;
    update(id: number, updateSaleProductDto: UpdateSaleProductDto): Promise<{
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
