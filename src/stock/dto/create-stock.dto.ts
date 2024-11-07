import { ApiProperty } from '@nestjs/swagger'
import { Exclude } from 'class-transformer'
import { IsInt, IsNotEmpty, IsNumber, IsOptional } from 'class-validator'
export class CreateStockDto {
    @IsNotEmpty({message: "La id del departamento no debe estar vacio"})
    @IsInt({message:"La sucursal debe ser un entero"})
    @ApiProperty()
    branches_idbranches: number

    @IsNotEmpty({message:"La el id del producto no debe ser vacio"})
    @IsInt({message:"La id del producto debe ser un entero"})
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
