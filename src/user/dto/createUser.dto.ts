import { Exclude } from 'class-transformer'
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength} from 'class-validator'

export class CreateUserDto{
    @IsInt()
    @IsNotEmpty()
    @ApiProperty()
    rols_idrols: number

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    name:string

    @IsEmail()
    @IsNotEmpty()
    @ApiProperty()
    email: string

    @MinLength(5, {message: "La constraseña debe tener minimo una longitud de 5 caracteres"})
    @IsNotEmpty()
    @ApiProperty()
    password: string

    @IsOptional()
    @IsInt()
    @IsNotEmpty()
    is_deleted: number
} 
