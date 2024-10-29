import { IsNotEmpty, IsString } from 'class-validator'


export class CreateRolsDto {
    @IsString()
    @IsNotEmpty()
    name:string
}