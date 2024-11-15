import { PartialType } from '@nestjs/mapped-types';
import { CreateStockDto } from './create-stock.dto';
import { IsOptional } from 'class-validator';

export class UpdateStockDto extends PartialType(CreateStockDto) {
    @IsOptional()
    newImage?: string
}
