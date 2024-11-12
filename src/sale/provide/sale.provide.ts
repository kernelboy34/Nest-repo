import { Sale } from "../entities/sale.entity";

export const saleProvider = [
    {
        provide: "SALES_REPOSITORY",
        useValue: Sale
    }
]