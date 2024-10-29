import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { SizeService } from './size.service';
import { CreateSizeDto } from './dto/create-size.dto';
import { UpdateSizeDto } from './dto/update-size.dto';

@Controller('sizes')
export class SizeController {
  constructor(private readonly sizesService: SizeService) {}

  @UsePipes(new ValidationPipe({
    whitelist: true,
    transform: true
  }))
  @Post('create')
  create(@Body() createSizeDto: CreateSizeDto) {
    return this.sizesService.create(createSizeDto);
  }

  @Get('findAll')
  findAll() {
    return this.sizesService.findAll();
  }

  @Get('findOne/:id')
  findOne(@Param('id') id: string) {
    return this.sizesService.findOne(+id);
  }

  @UsePipes(new ValidationPipe({
    whitelist: true,
    transform: true
  }))
  @Patch('updateOne/:id')
  update(@Param('id') id: string, @Body() updateSizeDto: UpdateSizeDto) {
    return this.sizesService.update(+id, updateSizeDto);
  }

  @UsePipes(new ValidationPipe({
    whitelist: true,
    transform: true
  }))
  @Delete('deleteOne/:id')
  remove(@Param('id') id: string) {
    return this.sizesService.delete(+id);
  }
}
