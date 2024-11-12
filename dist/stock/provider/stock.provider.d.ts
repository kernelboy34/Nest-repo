import { Stock } from "../entities/stock.entity";
export declare const stockProvider: {
    provide: string;
    useValue: typeof Stock;
}[];
