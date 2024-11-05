import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { Decimal } from '@prisma/client/runtime/library';
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
    @Type(()=> Decimal)
    @ApiProperty()
    unitPrice: Decimal

    @IsOptional()
    @IsInt()
    @IsNotEmpty()
    @ApiProperty()
    is_deleted: number
}
