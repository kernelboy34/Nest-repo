import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger';

export class CreateRolsDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({example: "Usuario", description: "Nombre de rol"})
    name:string

    @IsOptional()
    @IsInt()
    @IsNotEmpty()
    is_deleted: number
}