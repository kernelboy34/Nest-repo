import { Size } from "../entities/size.entity";


export const sizeProvider = [
    {
        provide: "SIZES_REPOSITORY",
        useValue: Size
    }
]