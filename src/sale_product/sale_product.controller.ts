import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, UseGuards } from '@nestjs/common';
import { SaleProductService } from './sale_product.service';
import { CreateSaleProductDto } from './dto/create-sale_product.dto';
import { UpdateSaleProductDto } from './dto/update-sale_product.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { RolesGuard } from 'src/rol/rols.guard';
import { Roles } from 'src/rol/decorators/rol.decorator';

@ApiBearerAuth()
@Controller('sale_product')
@ApiTags("Ventas de Productos")
@UseGuards(RolesGuard)
export class SaleProductController {
  constructor(private readonly saleProductService: SaleProductService) {}

  @UsePipes(new ValidationPipe({
    whitelist:true,
    transform:true
  }))
  @Post('create')
  @ApiOperation({summary: "Crear una nueva venta de producto"})
  @Roles('Usuario', 'Administrador')
  create(@Body() createSaleProductDto: CreateSaleProductDto) {
    return this.saleProductService.create(createSaleProductDto);
  }

  @Get('findAll')
  @ApiOperation({summary: "Listar todas las ventas de productos"})
  @Roles('Usuario', 'Administrador')
  findAll() {
    return this.saleProductService.findAll();
  }

  @Get('findOne/:id')
  @ApiOperation({summary: "Listar una venta de producto segun el id"})
  @Roles('Usuario', 'Administrador')
  findOne(@Param('id') id: string) {
    return this.saleProductService.findOne(+id);
  }

  @UsePipes(new ValidationPipe({
    whitelist:true,
    transform:true
  }))
  @Patch('updateOne/:id')
  @ApiOperation({summary: "Actualizar una venta de producto segun el id"})
  @Roles('Administrador')
  update(@Param('id') id: number, @Body() updateSaleProductDto: UpdateSaleProductDto) {
    return this.saleProductService.update(+id, updateSaleProductDto);
  }

  @UsePipes(new ValidationPipe({
    whitelist:true,
    transform:true
  }))
  @Delete('deleteOne/:id')
  @ApiOperation({summary: "Eliminar una venta de producto segun el id"})
  @Roles('Usuario', 'Administrador')
  remove(@Param('id') id: number) {
    return this.saleProductService.remove(+id);
  }
}
