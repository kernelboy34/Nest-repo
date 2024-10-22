import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductSizeService } from './product_size.service';
import { CreateProductSizeDto } from './dto/create-product_size.dto';
import { UpdateProductSizeDto } from './dto/update-product_size.dto';

@Controller('product-size')
export class ProductSizeController {
  constructor(private readonly productSizeService: ProductSizeService) {}

  @Post('create')
  create(@Body() createProductSizeDto: CreateProductSizeDto) {
    return this.productSizeService.create(createProductSizeDto);
  }

  @Get('findAll')
  findAll() {
    return this.productSizeService.findAll();
  }

  @Get('findOne/:id')
  findOne(@Param('id') id: string) {
    return this.productSizeService.findOne(+id);
  }

  @Patch('updateOne/:id')
  update(@Param('id') id: string, @Body() updateProductSizeDto: UpdateProductSizeDto) {
    return this.productSizeService.update(+id, updateProductSizeDto);
  }

  @Delete('deleteOne/:id')
  remove(@Param('id') id: string) {
    return this.productSizeService.remove(+id);
  }
}
