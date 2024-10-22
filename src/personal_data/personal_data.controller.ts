import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PersonalDataService } from './personal_data.service';
import { CreatePersonalDatumDto } from './dto/create-personal_datum.dto';
import { UpdatePersonalDatumDto } from './dto/update-personal_datum.dto';

@Controller('personal-data')
export class PersonalDataController {
  constructor(private readonly personalDataService: PersonalDataService) {}

  @Post('create')
  async create(@Body() data: CreatePersonalDatumDto) {
    return await this.personalDataService.create(data);
  }

  @Get('findAll')
  async findAll() {
    return await this.personalDataService.findAll();
  }

  @Get('findOne/:id')
  async findOne(@Param('id') id: string) {
    return await this.personalDataService.findOne(+id);
  }

  @Patch('updateOne/:id')
  async update(@Param('id') id: string, @Body() updatePersonalDatumDto: UpdatePersonalDatumDto) {
    return await this.personalDataService.update(+id, updatePersonalDatumDto);
  }

  @Delete('deleteOne/:id')
  async remove(@Param('id') id: string) {
    return await this.personalDataService.remove(+id);
  }
}
