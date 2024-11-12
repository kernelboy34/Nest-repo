import { Product } from "../entities/product.entity";

export const productProvider = [
    {
        provide: "PRODUCTS_REPOSITORY",
        useValue: Product
    }
]