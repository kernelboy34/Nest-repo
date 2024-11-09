import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, UseGuards } from '@nestjs/common';
import { StockService } from './stock.service';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { RolesGuard } from 'src/rol/rols.guard';
import { Roles } from 'src/rol/decorators/rol.decorator';

@ApiBearerAuth()
@Controller('stock')
@ApiTags("Existencias")
@UseGuards(RolesGuard)
export class StockController {
  constructor(private readonly stockService: StockService) {}

  @UsePipes(new ValidationPipe({
    whitelist: true,
    transform: true
  }))
  @Post('create')
  @ApiOperation({summary:"Crear un nuevo stock"})
  @Roles('Administrador')
  create(@Body() createStockDto: CreateStockDto) {
    return this.stockService.create(createStockDto);
  }

  @Get('findAll')
  @ApiOperation({summary: "Listar todos los stocks"})
  @Roles('Administrados', 'Usuario')
  findAll() {
    return this.stockService.findAll();
  }

  @UsePipes(new ValidationPipe({
    transform: true
  }))
  @Get('findOne/:id')
  @ApiOperation({summary: "Listar un stock por id"})
  @Roles('Usuario', 'Administrador')
  findOne(@Param('id') id: string) {
    return this.stockService.findOne(+id);
  }

  @UsePipes(new ValidationPipe({
    whitelist: true,
    transform: true
  }))
  @Patch('updateOne/:id')
  @ApiOperation({summary: "Actualizar un stock por el id"})
  @Roles('Administrador')
  update(@Param('id') id: string, @Body() updateStockDto: UpdateStockDto) {
    return this.stockService.update(+id, updateStockDto);
  }
  
  @UsePipes(new ValidationPipe({
    whitelist: true,
    transform: true
  }))
  @Delete('deleteOne/:id')
  @ApiOperation({summary: "Eliminar un stock por el id"})
  @Roles('Administrador')
  remove(@Param('id') id: string) {
    return this.stockService.remove(+id);
  }
}
