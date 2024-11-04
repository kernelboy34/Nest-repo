import { IsDateString, IsInt, IsNotEmpty, IsNumber, IsOptional } from 'class-validator'
export class CreateSaleDto {
    @IsInt()
    @IsNotEmpty()
    user_iduser: number

    @IsNotEmpty()
    @IsDateString()
    @IsOptional()
    date_sale: string

    @IsNumber()
    @IsOptional()
    status: number

    @IsOptional()
    @IsInt()
    @IsNotEmpty()
    is_deleted: number
}
