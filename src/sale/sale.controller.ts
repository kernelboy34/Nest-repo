import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SaleService } from './sale.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';

@Controller('sale')
export class SaleController {
  constructor(private readonly saleService: SaleService) {}

  @Post('create')
  create(@Body() createSaleDto: CreateSaleDto) {
    return this.saleService.create(createSaleDto);
  }

  @Get('findAll')
  findAll() {
    return this.saleService.findAll();
  }

  @Get('findOne/:id')
  findOne(@Param('id') id: string) {
    return this.saleService.findOne(+id);
  }

  @Patch('updateOne/:id')
  update(@Param('id') id: string, @Body() updateSaleDto: UpdateSaleDto) {
    return this.saleService.update(+id, updateSaleDto);
  }

  @Delete('deleteOne/:id')
  remove(@Param('id') id: string) {
    return this.saleService.remove(+id);
  }
}
