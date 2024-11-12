import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
export class CreateProductDto {
    @IsOptional()
    @IsString()
    @ApiProperty({example: "Camiseta", description: "Nombre del producto"})
    name:string

    @IsOptional()
    @IsString()
    @ApiProperty({example: "imagen.jpg", description: "Una imagen a cargar que se guarda de forma local"})
    imageUrl: string

    @IsOptional()
    @IsNumber()
    //TODO: Puedes cambiar el IsNumber() a IsDecimal({force_decimal: false, decimal_digits:'10,2'})
    @Type(()=> Number)
    @ApiProperty({example: 15.3, description: "Un precio unitario para el producto"})
    unitPrice: number

    @IsOptional()
    @IsInt()
    @IsNotEmpty()
    @ApiProperty({example:0, description: "Eliminacion logica de un producto"})
    is_deleted: number
}
