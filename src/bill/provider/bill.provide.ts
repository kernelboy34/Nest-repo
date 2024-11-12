import { Bill } from "../entities/bill.entity";

export const billProvider = [
    {
        provide: "BILLS_REPOSITORY",
        useValue: Bill
    }
]