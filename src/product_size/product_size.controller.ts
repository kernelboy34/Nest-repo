import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { ProductSizeService } from './product_size.service';
import { CreateProductSizeDto } from './dto/create-product_size.dto';
import { UpdateProductSizeDto } from './dto/update-product_size.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('product_size')
export class ProductSizeController {
  constructor(private readonly productSizeService: ProductSizeService) {}

  @UsePipes(new ValidationPipe({
    whitelist:true,
    transform:true
  }))
  @Post('create')
  @ApiOperation({summary: "Crear un tamaño del producto"})
  create(@Body() createProductSizeDto: CreateProductSizeDto) {
    return this.productSizeService.create(createProductSizeDto);
  }

  @Get('findAll')
  @ApiOperation({summary: "Listar todos los tamaños de productos"})
  findAll() {
    return this.productSizeService.findAll();
  }

  @Get('findOne/:id')
  @ApiOperation({summary: "Listar un tamaño de producto por id"})
  findOne(@Param('id') id: string) {
    return this.productSizeService.findOne(+id);
  }

  @UsePipes(new ValidationPipe({
    whitelist:true,
    transform:true
  }))
  @Patch('updateOne/:id')
  @ApiOperation({summary: "Actualizar un tamaño de producto segun el id"})
  update(@Param('id') id: string, @Body() updateProductSizeDto: UpdateProductSizeDto) {
    return this.productSizeService.update(+id, updateProductSizeDto);
  }

  @UsePipes(new ValidationPipe({
    whitelist:true,
    transform:true
  }))
  @Delete('deleteOne/:id')
  @ApiOperation({summary: "Eliminar un tamaño de producto segun el id"})
  remove(@Param('id') id: string) {
    return this.productSizeService.remove(+id);
  }
}
