import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { BillService } from './bill.service';
import { CreateBillDto } from './dto/create-bill.dto';
import { UpdateBillDto } from './dto/update-bill.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('bill')
@ApiTags("Facturas")
export class BillController {
  constructor(private readonly billService: BillService) {}

  @UsePipes(new ValidationPipe({
    whitelist:true,
    transform:true
  }))
  @Post('create')
  @ApiOperation({summary: "Crear una factura"})
  create(@Body() createBillDto: CreateBillDto) {
    return this.billService.create(createBillDto);
  }

  @Get('findAll')
  @ApiOperation({summary: "Listar todas las facturas"})
  findAll() {
    return this.billService.findAll();
  }

  @Get('findOne/:id')
  @ApiOperation({summary: "Listar una factura por el id"})
  findOne(@Param('id') id: string) {
    return this.billService.findOne(+id);
  }

  @UsePipes(new ValidationPipe({
    whitelist:true,
    transform:true
  }))
  @Patch('updateOne/:id')
  @ApiOperation({summary: "Actualizar una factura segun el id"})
  update(@Param('id') id: string, @Body() updateBillDto: UpdateBillDto) {
    return this.billService.update(+id, updateBillDto);
  }
  
  @UsePipes(new ValidationPipe({
    whitelist:true,
    transform:true
  }))
  @Delete('deleteOne/:id')
  @ApiOperation({summary: "Eliminar una factura segun el id"})
  remove(@Param('id') id: string) {
    return this.billService.remove(+id);
  }
}
