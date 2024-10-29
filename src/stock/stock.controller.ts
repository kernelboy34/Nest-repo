import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { StockService } from './stock.service';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';

@Controller('stock')
export class StockController {
  constructor(private readonly stockService: StockService) {}

  @UsePipes(new ValidationPipe({
    whitelist: true,
    transform: true
  }))
  @Post('create')
  create(@Body() createStockDto: CreateStockDto) {
    return this.stockService.create(createStockDto);
  }

  @Get('findAll')
  findAll() {
    return this.stockService.findAll();
  }

  @UsePipes(new ValidationPipe({
    transform: true
  }))
  @Get('findOne/:id')
  findOne(@Param('id') id: string) {
    return this.stockService.findOne(+id);
  }

  @UsePipes(new ValidationPipe({
    whitelist: true,
    transform: true
  }))
  @Patch('updateOne/:id')
  update(@Param('id') id: string, @Body() updateStockDto: UpdateStockDto) {
    return this.stockService.update(+id, updateStockDto);
  }
  
  @UsePipes(new ValidationPipe({
    whitelist: true,
    transform: true
  }))
  @Delete('deleteOne/:id')
  remove(@Param('id') id: string) {
    return this.stockService.remove(+id);
  }
}
