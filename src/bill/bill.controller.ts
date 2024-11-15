import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, UseGuards } from '@nestjs/common';
import { BillService } from './bill.service';
import { CreateBillDto } from './dto/create-bill.dto';
import { UpdateBillDto } from './dto/update-bill.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { RolesGuard } from 'src/rol/rols.guard';
import { Roles } from 'src/rol/decorators/rol.decorator';

@ApiBearerAuth()
@Controller('bill')
@ApiTags("Facturas")
@UseGuards(RolesGuard)
export class BillController {
  constructor(private readonly billService: BillService) {}

  @UsePipes(new ValidationPipe({
    whitelist:true,
    transform:true
  }))
  @Post('create')
  @ApiOperation({summary: "Crear una factura"})
  @Roles('Administrador')
  create(@Body() createBillDto: CreateBillDto) {
    return this.billService.create(createBillDto);
  }

  @Get('findAll')
  @ApiOperation({summary: "Listar todas las facturas"})
  @Roles('Administrador', 'Usuario')
  findAll() {
    return this.billService.findAll();
  }

  @Get('findOne/:id')
  @ApiOperation({summary: "Listar una factura por el id"})
  @Roles('Administrador', 'Usuario')
  findOne(@Param('id') id: number) {
    return this.billService.findOne(+id);
  }

  @UsePipes(new ValidationPipe({
    whitelist:true,
    transform:true
  }))
  @Patch('updateOne/:id')
  @ApiOperation({summary: "Actualizar una factura segun el id"})
  @Roles('Administrador')
  update(@Param('id') id: number, @Body() updateBillDto: UpdateBillDto) {
    return this.billService.update(+id, updateBillDto);
  }
  
  @UsePipes(new ValidationPipe({
    whitelist:true,
    transform:true
  }))
  @Delete('deleteOne/:id')
  @ApiOperation({summary: "Eliminar una factura segun el id"})
  @Roles('Administrador')
  remove(@Param('id') id: number) {
    return this.billService.remove(+id);
  }
}
