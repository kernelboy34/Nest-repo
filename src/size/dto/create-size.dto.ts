import { IsInt, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator'

export class CreateSizeDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(45)
    name: string

    @IsOptional()
    @IsInt()
    @IsNotEmpty()
    is_deleted: number
}
