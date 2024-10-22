import { IsDate, IsInt, IsNotEmpty, IsNumber, IsOptional } from 'class-validator'
export class CreateSaleDto {
    @IsInt()
    @IsNotEmpty()
    user_iduser: number

    @IsNotEmpty()
    @IsDate()
    date_sale: string

    @IsNumber()
    @IsOptional()
    status: number
}
