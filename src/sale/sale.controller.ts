import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { SaleService } from './sale.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('sale')
@ApiTags("Ventas")
export class SaleController {
  constructor(private readonly saleService: SaleService) {}

  @UsePipes(new ValidationPipe({
    whitelist: true,
    transform: true
  }))
  @Post('create')
  @ApiOperation({summary: "Crear una nueva venta"})
  create(@Body() createSaleDto: CreateSaleDto) {
    return this.saleService.create(createSaleDto);
  }

  @Get('findAll')
  @ApiOperation({summary: "Listar todas las ventas"})
  findAll() {
    return this.saleService.findAll();
  }

  @Get('findOne/:id')
  @ApiOperation({summary: "Listar una venta segun el id"})
  findOne(@Param('id') id: string) {
    return this.saleService.findOne(+id);
  }

  @UsePipes(new ValidationPipe({
    whitelist: true,
    transform: true
  }))
  @Patch('updateOne/:id')
  @ApiOperation({summary: "Actualizar una venta por el id"})
  update(@Param('id') id: string, @Body() updateSaleDto: UpdateSaleDto) {
    return this.saleService.update(+id, updateSaleDto);
  }

  @UsePipes(new ValidationPipe({
    whitelist: true,
    transform: true
  }))
  @Delete('deleteOne/:id')
  @ApiOperation({summary: "Eliminar una venta por el id"})
  remove(@Param('id') id: string) {
    return this.saleService.remove(+id);
  }
}
