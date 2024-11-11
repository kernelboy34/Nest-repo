import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
export declare class ProductService {
    private db;
    constructor(db: PrismaService);
    create(data: CreateProductDto): Promise<{
        name: string | null;
        is_deleted: number | null;
        idproducts: number;
        imageUrl: string | null;
        unitPrice: Prisma.Decimal | null;
    }>;
    findAll(): Promise<{
        name: string | null;
        is_deleted: number | null;
        idproducts: number;
        imageUrl: string | null;
        unitPrice: Prisma.Decimal | null;
    }[]>;
    findOne(id: number): Promise<{
        name: string | null;
        is_deleted: number | null;
        idproducts: number;
        imageUrl: string | null;
        unitPrice: Prisma.Decimal | null;
    }>;
    paginateProducts(take: number, skip: number): Promise<{
        name: string | null;
        is_deleted: number | null;
        idproducts: number;
        imageUrl: string | null;
        unitPrice: Prisma.Decimal | null;
    }[]>;
    update(id: number, data: UpdateProductDto): Promise<{
        name: string | null;
        is_deleted: number | null;
        idproducts: number;
        imageUrl: string | null;
        unitPrice: Prisma.Decimal | null;
    }>;
    remove(id: number): Promise<{
        name: string | null;
        is_deleted: number | null;
        idproducts: number;
        imageUrl: string | null;
        unitPrice: Prisma.Decimal | null;
    }>;
}
