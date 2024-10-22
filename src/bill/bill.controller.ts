import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BillService } from './bill.service';
import { CreateBillDto } from './dto/create-bill.dto';
import { UpdateBillDto } from './dto/update-bill.dto';

@Controller('bill')
export class BillController {
  constructor(private readonly billService: BillService) {}

  @Post('create')
  create(@Body() createBillDto: CreateBillDto) {
    return this.billService.create(createBillDto);
  }

  @Get('findAll')
  findAll() {
    return this.billService.findAll();
  }

  @Get('findOne/:id')
  findOne(@Param('id') id: string) {
    return this.billService.findOne(+id);
  }

  @Patch('updateOne/:id')
  update(@Param('id') id: string, @Body() updateBillDto: UpdateBillDto) {
    return this.billService.update(+id, updateBillDto);
  }

  @Delete('deleteOne/:id')
  remove(@Param('id') id: string) {
    return this.billService.remove(+id);
  }
}
