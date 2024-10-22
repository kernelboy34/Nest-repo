import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'
export class CreateSaleProductDto {
    @IsInt()
    @IsNotEmpty()
    sales_idsales: number 

    @IsInt()
    @IsNotEmpty()
    products_idproducts: number

    @IsString()
    @IsNotEmpty()
    quantity: string

    @IsOptional()
    @IsNumber()
    total_price: number
}
