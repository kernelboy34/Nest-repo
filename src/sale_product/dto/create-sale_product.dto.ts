import { ApiProperty } from '@nestjs/swagger'
import { IsDecimal, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'
export class CreateSaleProductDto {
    @IsInt({message:"El id de la venta debe ser un numero"})
    @IsNotEmpty({message:"El id de la venta no debe ser vacio"})
    @ApiProperty({example: 1, description: "Incersion de un id valido de venta"})
    sales_idsales: number 

    @IsInt({message:"El id del producto debe ser un entero"})
    @IsNotEmpty({message:"El id del producto no debe ser vacio"})
    @ApiProperty({example: 1, description: "Incersion de un id valido de producto"})
    products_idproducts: number

    @IsString()
    @IsNotEmpty({message: "la cantidad no debe ser un vacio"})
    @ApiProperty({example: "10", description: "incersion de una cantidad valida"})
    quantity: string


    //TODO: Puedes cambiar el IsNumber() a IsDecimal({force_decimal: false, decimal_digits:'1})
    @IsOptional()
    @IsNumber()
    @ApiProperty({example: 12.3, description: "Incersion de un precio total en decimal o entero"})
    total_price: number

    @IsOptional()
    @IsInt()
    @IsNotEmpty()
    is_deleted: number
}
