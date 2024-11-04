import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'
export class CreateProductDto {
    @IsOptional()
    @IsString()
    name:string

    @IsOptional()
    @IsString()
    imageUrl: string

    @IsOptional()
    @IsNumber()
    UnitPrice: number

    @IsOptional()
    @IsInt()
    @IsNotEmpty()
    is_deleted: number
}
