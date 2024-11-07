import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { SaleProductService } from './sale_product.service';
import { CreateSaleProductDto } from './dto/create-sale_product.dto';
import { UpdateSaleProductDto } from './dto/update-sale_product.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('sale_product')
@ApiTags("Ventas de Productos")
export class SaleProductController {
  constructor(private readonly saleProductService: SaleProductService) {}

  @UsePipes(new ValidationPipe({
    whitelist:true,
    transform:true
  }))
  @Post('create')
  @ApiOperation({summary: "Crear una nueva venta de producto"})
  create(@Body() createSaleProductDto: CreateSaleProductDto) {
    return this.saleProductService.create(createSaleProductDto);
  }

  @Get('findAll')
  @ApiOperation({summary: "Listar todas las ventas de productos"})
  findAll() {
    return this.saleProductService.findAll();
  }

  @Get('findOne/:id')
  @ApiOperation({summary: "Listar una venta de producto segun el id"})
  findOne(@Param('id') id: string) {
    return this.saleProductService.findOne(+id);
  }

  @UsePipes(new ValidationPipe({
    whitelist:true,
    transform:true
  }))
  @Patch('updateOne/:id')
  @ApiOperation({summary: "Actualizar una venta de producto segun el id"})
  update(@Param('id') id: number, @Body() updateSaleProductDto: UpdateSaleProductDto) {
    return this.saleProductService.update(+id, updateSaleProductDto);
  }

  @UsePipes(new ValidationPipe({
    whitelist:true,
    transform:true
  }))
  @Delete('deleteOne/:id')
  @ApiOperation({summary: "Eliminar una venta de producto segun el id"})
  remove(@Param('id') id: number) {
    return this.saleProductService.remove(+id);
  }
}
