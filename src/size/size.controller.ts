import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SizeService } from './size.service';
import { CreateSizeDto } from './dto/create-size.dto';
import { UpdateSizeDto } from './dto/update-size.dto';

@Controller('sizes')
export class SizeController {
  constructor(private readonly sizesService: SizeService) {}

  @Post('create')
  async create(@Body() createSizeDto: CreateSizeDto) {
    return await this.sizesService.create(createSizeDto);
  }

  @Get('findAll')
  async findAll() {
    return await this.sizesService.findAll();
  }

  @Get('findOne/:id')
  async findOne(@Param('id') id: string) {
    return await this.sizesService.findOne(+id);
  }

  @Patch('updateOne/:id')
  async update(@Param('id') id: string, @Body() updateSizeDto: UpdateSizeDto) {
    return await this.sizesService.update(+id, updateSizeDto);
  }

  @Delete('deleteOne/:id')
  async remove(@Param('id') id: string) {
    return await this.sizesService.delete(+id);
  }
}
