import { Exclude } from 'class-transformer'
import { IsEmail, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength} from 'class-validator'

export class CreateUserDto{
    @IsInt()
    @IsNotEmpty()
    rols_idrols: number

    @IsString()
    @IsNotEmpty()
    name:string

    @IsEmail()
    @IsNotEmpty()
    email: string

    @MinLength(5, {message: "La constraseña debe tener minimo una longitud de 5 caracteres"})
    @IsNotEmpty()
    password: string

    @IsOptional()
    @IsInt()
    @IsNotEmpty()
    is_deleted: number
} 
