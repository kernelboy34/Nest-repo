import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsOptional, IsString, MinLength} from 'class-validator'

export class CreatePersonalDatumDto {
    @IsInt({message: "El id del usuario debe ser un entero"})
    @IsNotEmpty({message:"El id del usuario no debe ser vacio"})
    @ApiProperty({example: 1, description: "Id de un datos personales"})
    user_iduser: number; 

    @IsNotEmpty({message:"El nombre no debe ser vacio"})
    @IsString()
    @ApiProperty({example: "Pepito", description: "Nombre que va a contener el usuario"})
    name: string

    @IsNotEmpty({message:"El apellido no debe ser vacio"})
    @IsString()
    @ApiProperty({example: "Perez", description: "Apellido del usuario"})
    lastname: string

    @IsNotEmpty({message: "la cuenta del banco no debe estar vacio"})
    @IsString()
    @ApiProperty({example:"4773727", description: "numero de la cuenta de banco"})
    bank_account: string

    @IsOptional()
    @MinLength(8, {message: "El numero debe contener minimo 8 digitos"})
    @ApiProperty({example: 38875473,description: "numero de telefono del usuario"})
    phone: string

    @IsOptional()
    @ApiProperty({example: "Plaza Murillo", description: "Direccion donde reside el usuario"})
    address : string

    @IsOptional()
    @IsInt()
    @IsNotEmpty()
    is_deleted: number
}
