import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength} from 'class-validator'

export class CreateUserDto{
    @IsInt({message:"La id de rols debe contener un entero"})
    @IsNotEmpty({message:"La id de rols no debe estar vacio"})
    @ApiProperty({example: 1, description: "id del rol existente"})
    rols_idrols: number

    @IsString({message:"El nombre debe ser una cadena"})
    @IsNotEmpty({message:"El nombre no debe estar vacio"})
    @ApiProperty({example: "Pepito", description:"Nombre del usuario"})
    name:string

    @IsEmail({}, {message: "Correo Electronico no valido"})
    @IsNotEmpty({message:"Debe contener @ el correo"})
    @ApiProperty({example: "user@est.univalle.edu", description:"correo del usuario"})
    email: string

    @MinLength(8, {message: "La constraseña debe tener minimo una longitud de 8 caracteres"})
    @IsNotEmpty({message: "la constraseña no debe ser vacio"})
    @ApiProperty({example: "Pepito1234", description: "Escriba una constraseña de mas de 8 digitos"})
    password: string

    @IsOptional()
    @IsInt()
    @IsNotEmpty()
    is_deleted: number
} 
