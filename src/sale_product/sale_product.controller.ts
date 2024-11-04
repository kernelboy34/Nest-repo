import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { SaleProductService } from './sale_product.service';
import { CreateSaleProductDto } from './dto/create-sale_product.dto';
import { UpdateSaleProductDto } from './dto/update-sale_product.dto';

@Controller('sale_product')
export class SaleProductController {
  constructor(private readonly saleProductService: SaleProductService) {}

  @UsePipes(new ValidationPipe({
    whitelist:true,
    transform:true
  }))
  @Post('create')
  create(@Body() createSaleProductDto: CreateSaleProductDto) {
    return this.saleProductService.create(createSaleProductDto);
  }

  @Get('findAll')
  findAll() {
    return this.saleProductService.findAll();
  }

  @Get('findOne/:id')
  findOne(@Param('id') id: string) {
    return this.saleProductService.findOne(+id);
  }

  @UsePipes(new ValidationPipe({
    whitelist:true,
    transform:true
  }))
  @Patch('updateOne/:id')
  update(@Param('id') id: number, @Body() updateSaleProductDto: UpdateSaleProductDto) {
    return this.saleProductService.update(+id, updateSaleProductDto);
  }

  @UsePipes(new ValidationPipe({
    whitelist:true,
    transform:true
  }))
  @Delete('deleteOne/:id')
  remove(@Param('id') id: number) {
    return this.saleProductService.remove(+id);
  }
}
