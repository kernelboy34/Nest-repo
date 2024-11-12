import { Stock } from "../entities/stock.entity";

export const stockProvider = [
    {
        provide: "STOCKS_REPOSITORY",
        useValue: Stock
    }
]