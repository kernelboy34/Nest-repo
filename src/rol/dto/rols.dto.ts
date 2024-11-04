import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator'


export class CreateRolsDto {
    @IsString()
    @IsNotEmpty()
    name:string

    @IsOptional()
    @IsInt()
    @IsNotEmpty()
    is_deleted: number
}