import { SaleProduct } from "../entities/sale_product.entity";


export const saleproductProvider = [
    {
        provide: "SALE_PRODUCTS_REPOSITORY",
        useValue: SaleProduct
    }
]