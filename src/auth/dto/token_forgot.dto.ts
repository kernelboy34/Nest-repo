import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";


export class Forgot_TokenDto{

    @IsEmail({}, {message: "Debe ser un email valido"})
    @ApiProperty({example: "user@est.univalle.edu"})
    email?: string;

}