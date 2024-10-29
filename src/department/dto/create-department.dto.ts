import { IsNotEmpty, IsString, MaxLength } from 'class-validator'

export class CreateDepartmentDto {
    @IsNotEmpty()
    @IsString()
    @MaxLength(45)
    name: string

    @IsString()
    @IsNotEmpty()
    @MaxLength(45)
    address: string
}
