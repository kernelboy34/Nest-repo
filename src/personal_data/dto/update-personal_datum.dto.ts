import { PartialType } from '@nestjs/mapped-types';
import { CreatePersonalDatumDto } from './create-personal_datum.dto';

export class UpdatePersonalDatumDto extends PartialType(CreatePersonalDatumDto) {}
