import { ApiProperty } from '@nestjs/swagger'
import { Exclude } from 'class-transformer'
import { IsInt, IsNotEmpty, IsNumber, IsOptional } from 'class-validator'
export class CreateStockDto {
    @IsNotEmpty({message: "La id del departamento no debe estar vacio"})
    @IsInt({message:"La sucursal debe ser un entero"})
    @ApiProperty({example: 1, description: "Insercion de un sucursal existente"})
    branches_idbranches: number

    @IsNotEmpty({message:"La el id del producto no debe ser vacio"})
    @IsInt({message:"La id del producto debe ser un entero"})
    @ApiProperty({example: 1, description: "Insercion de un producto existente"})
    products_idproducts: number

    @IsOptional()
    @IsNumber()
    @ApiProperty({example: "10", description: "Insercion de una cantidad"})
    quantity: number

    @IsOptional()
    @IsInt()
    @IsNotEmpty()
    is_deleted: number
}
