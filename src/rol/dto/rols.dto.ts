import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger';

export class CreateRolsDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    name:string

    @IsOptional()
    @IsInt()
    @IsNotEmpty()
    is_deleted: number
}