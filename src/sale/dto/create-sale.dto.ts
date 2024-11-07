import { IsDateString, IsInt, IsNotEmpty, IsNumber, IsOptional } from 'class-validator'
export class CreateSaleDto {
    @IsInt({message:"El id del usuario deber ser un entero"})
    @IsNotEmpty({message:"El id del usuario no debe ser vacio"})
    user_iduser: number

    @IsNotEmpty()
    @IsDateString()
    @IsOptional()
    date_sale: string

    @IsNumber()
    @IsOptional()
    status: number

    @IsOptional()
    @IsInt()
    @IsNotEmpty()
    is_deleted: number
}
