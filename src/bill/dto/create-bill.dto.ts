import { ApiProperty } from '@nestjs/swagger'
import { IsInt, IsNotEmpty, IsNumber, IsOptional } from 'class-validator'
export class CreateBillDto {
    @IsInt({message: "El id de la venta debe ser entero"})
    @IsNotEmpty({message: "El id de la venta no debe estar vacio"})
    @ApiProperty({example: 1, description: "El id de la venta para la factura"})
    sales_idsales: number

    @IsOptional()
    @IsNumber()
    @ApiProperty({example: 12.3, description: "El precio total de una factura"})
    total_price: number
}
