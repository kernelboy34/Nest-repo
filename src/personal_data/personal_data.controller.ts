import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { PersonalDataService } from './personal_data.service';
import { CreatePersonalDatumDto } from './dto/create-personal_datum.dto';
import { UpdatePersonalDatumDto } from './dto/update-personal_datum.dto';

@Controller('personal-data')
export class PersonalDataController {
  constructor(private readonly personalDataService: PersonalDataService) {}

  @UsePipes(new ValidationPipe({
    whitelist:true,
    transform:true
  }))
  @Post('create')
  create(@Body() data: CreatePersonalDatumDto) {
    return this.personalDataService.create(data);
  }

  @Get('findAll')
  findAll() {
    return this.personalDataService.findAll();
  }

  @Get('findOne/:id')
  findOne(@Param('id') id: string) {
    return this.personalDataService.findOne(+id);
  }

  @UsePipes(new ValidationPipe({
    whitelist:true,
    transform:true
  }))
  @Patch('updateOne/:id')
  update(@Param('id') id: string, @Body() updatePersonalDatumDto: UpdatePersonalDatumDto) {
    return this.personalDataService.update(+id, updatePersonalDatumDto);
  }

  @UsePipes(new ValidationPipe({
    whitelist:true,
    transform:true
  }))
  @Delete('deleteOne/:id')
  remove(@Param('id') id: string) {
    return this.personalDataService.remove(+id);
  }
}
