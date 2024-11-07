import { ApiProperty } from "@nestjs/swagger";

export class AuthDTO {
    @ApiProperty({example: "user@est.univalle.edu", description: "Correo de la universidad"})
    email: string

    @ApiProperty({example: "constraseña1234", description: "Constraseña del usuario"})
    pass: string
}