import { ProductSize } from "../entities/product_size.entity";


export const productsizeProvider = [
    {
        provide: "PRODUCTSIZES_REPOSITORY",
        useValue: ProductSize
    }
]