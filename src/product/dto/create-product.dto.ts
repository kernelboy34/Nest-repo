import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger';
export class CreateProductDto {
    @IsOptional()
    @IsString()
    @ApiProperty()
    name:string

    @IsOptional()
    @IsString()
    @ApiProperty()
    imageUrl: string

    @IsOptional()
    @IsNumber()
    @ApiProperty()
    UnitPrice: number

    @IsOptional()
    @IsInt()
    @IsNotEmpty()
    @ApiProperty()
    is_deleted: number
}
