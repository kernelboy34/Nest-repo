import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { SaleProductService } from './sale_product.service';
import { CreateSaleProductDto } from './dto/create-sale_product.dto';
import { UpdateSaleProductDto } from './dto/update-sale_product.dto';

@Controller('sale-product')
export class SaleProductController {
  constructor(private readonly saleProductService: SaleProductService) {}

  @UsePipes(new ValidationPipe({
    whitelist:true,
    transform:true
  }))
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

  @UsePipes(new ValidationPipe({
    whitelist:true,
    transform:true
  }))
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateSaleProductDto: UpdateSaleProductDto) {
    return this.saleProductService.update(+id, updateSaleProductDto);
  }

  @UsePipes(new ValidationPipe({
    whitelist:true,
    transform:true
  }))
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.saleProductService.remove(+id);
  }
}
