import { ApiProperty } from '@nestjs/swagger'
import { Exclude } from 'class-transformer'
import { IsInt, IsNotEmpty, IsNumber, IsOptional } from 'class-validator'
export class CreateStockDto {
    @IsNotEmpty()
    @IsInt()
    @ApiProperty()
    branches_idbranches: number

    @IsNotEmpty()
    @IsInt()
    @ApiProperty()
    products_idproducts: number

    @IsOptional()
    @IsNumber()
    @ApiProperty()
    quantity: number

    @IsOptional()
    @IsInt()
    @IsNotEmpty()
    is_deleted: number
}
