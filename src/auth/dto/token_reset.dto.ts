import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";


export class ResetTokenDto{
    @IsString({message: "debe ser una cadena"})
    @ApiProperty({example: "constraseña1234"})
    password: string;

    @IsString({message: "Debe ser una cadena"})
    @ApiProperty({example: "token 12345"})
    token: string;
}