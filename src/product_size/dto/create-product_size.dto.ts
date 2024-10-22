import { IsInt, IsNotEmpty, IsNumber, IsOptional } from 'class-validator'
export class CreateProductSizeDto {
    @IsInt()
    @IsNotEmpty()
    products_idproducts:number

    @IsInt()
    @IsNotEmpty()
    sizes_idsizes:number

    @IsNumber()
    @IsOptional()
    amount: number
}
