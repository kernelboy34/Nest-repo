import { IsInt, IsNotEmpty, IsNumber, IsOptional } from 'class-validator'
export class CreateBillDto {
    @IsInt()
    @IsNotEmpty()
    sales_idsales: number

    @IsOptional()
    @IsNumber()
    total_price: number
}
