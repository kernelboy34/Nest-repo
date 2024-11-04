import { Exclude } from 'class-transformer';
import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class CreatePersonalDatumDto {
    @IsInt()
    @IsNotEmpty()
    user_iduser: number; 

    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsString()
    lastname: string

    @IsNotEmpty()
    @IsString()
    bank_account: string

    @IsOptional()
    phone: string
    @IsOptional()
    address : string

    @IsOptional()
    @IsInt()
    @IsNotEmpty()
    is_deleted: number
}
