import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsOptional } from "class-validator";

export class TokenDto {
    @IsOptional()
    @IsEmail({}, {message: "Debe ser correo valido"})
    @ApiProperty({example: "user@est.univalle.edu", description: "Correo de la universidad"})
    email?: string

    @IsOptional()
    @ApiProperty({example: "constraseña1234", description: "Constraseña del usuario"})
    password?: string

    @IsOptional()
    @ApiProperty({example: "token"})
    token?:string
}