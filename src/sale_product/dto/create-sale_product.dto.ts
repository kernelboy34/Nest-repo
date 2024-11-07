import { Exclude } from 'class-transformer'
import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'
export class CreateSaleProductDto {
    @IsInt({message:"El id de la venta debe ser un numero"})
    @IsNotEmpty({message:"El id de la venta no debe ser vacio"})
    sales_idsales: number 

    @IsInt({message:"El id del producto debe ser un entero"})
    @IsNotEmpty({message:"El id del producto no debe ser vacio"})
    products_idproducts: number

    @IsString()
    @IsNotEmpty()
    quantity: string

    @IsOptional()
    @IsNumber()
    total_price: number

    @IsOptional()
    @IsInt()
    @IsNotEmpty()
    is_deleted: number
}
