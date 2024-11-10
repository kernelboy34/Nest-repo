import { ApiProperty } from '@nestjs/swagger'
import { IsDateString, IsInt, IsNotEmpty, IsNumber, IsOptional } from 'class-validator'
export class CreateSaleDto {
    @IsInt({message:"El id del usuario deber ser un entero"})
    @IsNotEmpty({message:"El id del usuario no debe ser vacio"})
    @ApiProperty({example: 1, description: "Creacion de un nuevo usuario con un id valido"})
    user_iduser: number

    @IsNotEmpty()
    @IsDateString()
    @IsOptional()
    @ApiProperty({example: new Date().toISOString()})
    date_sale: string

    @IsNumber()
    @IsOptional()
    @ApiProperty({example: 0, description: "Valor de un estado"})
    status: number

    @IsOptional()
    @IsInt()
    @IsNotEmpty()
    is_deleted: number
}
