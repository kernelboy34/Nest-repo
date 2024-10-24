import { Exclude } from 'class-transformer'
import { IsEmail, IsInt, IsNotEmpty, IsString, MaxLength, MinLength} from 'class-validator'

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

    @MinLength(5)
    @IsNotEmpty()
    @Exclude()
    password: string
} 
