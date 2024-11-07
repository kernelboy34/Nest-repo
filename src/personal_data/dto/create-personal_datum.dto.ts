import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class CreatePersonalDatumDto {
    @IsInt({message: "El id del usuario debe ser un entero"})
    @IsNotEmpty({message:"El id del usuario no debe ser vacio"})
    user_iduser: number; 

    @IsNotEmpty({message:"El nombre no debe ser vacio"})
    @IsString()
    name: string

    @IsNotEmpty({message:"El apellido no debe ser vacio"})
    @IsString()
    lastname: string

    @IsNotEmpty({message: "la cuenta del banco no debe estar vacio"})
    @IsString()
    bank_account: string

    @IsOptional()
    phone: string
    @IsOptional()
    address : string

    @IsOptional()
    @IsInt()
    @IsNotEmpty()
    is_deleted: number
}
