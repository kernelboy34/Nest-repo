import { IsNotEmpty, IsString, MaxLength } from 'class-validator'

export class CreateSizeDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(45)
    name: string
}
