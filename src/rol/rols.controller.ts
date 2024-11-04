import { Controller, Get, Put, Post, Patch, Delete, Body, Param, UsePipes, ValidationPipe} from "@nestjs/common";
import { RolsService } from "./rols.service";
import { rols } from "@prisma/client";
import { CreateRolsDto } from "./dto/rols.dto";
import { UpdateRolsDto } from "./dto/rolsupdate.dto";

@Controller("rols")

export class RolsController{
    constructor(private readonly rolsService: RolsService){}

    @UsePipes(new ValidationPipe({whitelist:true, transform: true}))
    @Post('create')
    create(@Body() data: CreateRolsDto){
        return this.rolsService.create(data)
    }

    @Get('findAll')
    findAll(){
        return this.rolsService.findAll()
    }

    @Get('findOne/:id')
    findOne(@Param('id') id: number){
        return this.rolsService.findOne(+id)
    }

    @UsePipes(new ValidationPipe({
        whitelist: true,
        transform: true
    }))
    @Patch('updateOne/:id')
    updateOne(@Body() data: rols, @Param('id') id: number){
        return this.rolsService.updateOne(data, id)
    }

    @UsePipes(new ValidationPipe({
        transform:true,
        whitelist:true
    }))
    @Delete('deleteOne/:id')
    deleteOne(@Param('id') id: number){
        return this.rolsService.deleteOne(id)
    }
}