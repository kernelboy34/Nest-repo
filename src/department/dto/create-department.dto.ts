import { ApiProperty } from '@nestjs/swagger'
import { IsInt, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator'

export class CreateDepartmentDto {
    @IsNotEmpty({message:"La direccion no debe ser vacio"})
    @IsString()
    @MaxLength(45)
    @ApiProperty({example: "Nombre del departamento", description: "Nombre del departamento"})
    name: string

    @IsString()
    @IsNotEmpty({message:"La direccion no debe ser vacio"})
    @MaxLength(45)
    @ApiProperty({example: "San Juan", description: "La direccion de un sucursal"})
    address: string

    @IsOptional()
    @IsInt()
    is_deleted: number
}
