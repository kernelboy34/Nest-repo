import { ApiProperty } from '@nestjs/swagger'
import { IsInt, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator'

export class CreateSizeDto {
    @IsString({message:"El nombre del tamaño debe ser una cadena"})
    @IsNotEmpty({message:"El nombre del tamaño no debe estar vacio"})
    @MaxLength(45)
    @ApiProperty({example: "XL", description: "Nombre del tamaño"})
    name: string

    @IsOptional()
    @IsInt()
    @IsNotEmpty()
    is_deleted: number
}
