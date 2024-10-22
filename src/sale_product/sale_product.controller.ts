import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SaleProductService } from './sale_product.service';
import { CreateSaleProductDto } from './dto/create-sale_product.dto';
import { UpdateSaleProductDto } from './dto/update-sale_product.dto';

@Controller('sale-product')
export class SaleProductController {
  constructor(private readonly saleProductService: SaleProductService) {}

  @Post()
  create(@Body() createSaleProductDto: CreateSaleProductDto) {
    return this.saleProductService.create(createSaleProductDto);
  }

  @Get()
  findAll() {
    return this.saleProductService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.saleProductService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSaleProductDto: UpdateSaleProductDto) {
    return this.saleProductService.update(+id, updateSaleProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.saleProductService.remove(+id);
  }
}
