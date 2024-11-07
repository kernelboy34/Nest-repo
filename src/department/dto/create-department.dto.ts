import { IsInt, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator'

export class CreateDepartmentDto {
    @IsNotEmpty({message:"La direccion no debe ser vacio"})
    @IsString()
    @MaxLength(45)
    name: string

    @IsString()
    @IsNotEmpty({message:"La direccion no debe ser vacio"})
    @MaxLength(45)
    address: string

    @IsOptional()
    @IsInt()
    is_deleted: number
}
