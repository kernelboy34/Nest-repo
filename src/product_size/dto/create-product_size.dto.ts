import { ApiProperty } from '@nestjs/swagger'
import { IsInt, IsNotEmpty, IsNumber, IsOptional } from 'class-validator'
export class CreateProductSizeDto {
    @IsInt({message: "El id del producto debe ser un entero"})
    @IsNotEmpty({message: "El id del producto no debe estar vacio"})
    @ApiProperty({example: 1, description: "Id del producto"})
    products_idproducts:number

    @IsInt({message: "el id del tamaño debe ser un entero"})
    @IsNotEmpty({message: "El id del productos no debe estar vacio"})
    @ApiProperty({example: 1, description: "Id de un nuevo tamaño"})
    sizes_idsizes:number

    @IsNumber()
    @IsOptional()
    @ApiProperty({example: 12, description: "Monto del producto"})
    amount: number

    @IsOptional()
    @IsInt()
    @IsNotEmpty()
    is_deleted: number
}
