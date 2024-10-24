import { Exclude } from 'class-transformer'
import { IsInt, IsNotEmpty, IsNumber, IsOptional } from 'class-validator'
export class CreateStockDto {
    @IsNotEmpty()
    @IsInt()
    branches_idbranches: number

    @IsNotEmpty()
    @IsInt()
    products_idproducts: number

    @IsOptional()
    @IsNumber()
    quantity: number
}
