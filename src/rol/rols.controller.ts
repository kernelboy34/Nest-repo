import { Controller, Get, Put, Post, Patch, Delete, Body, Param, UsePipes, ValidationPipe} from "@nestjs/common";
import { RolsService } from "./rols.service";
import { rols } from "@prisma/client";


@Controller("rols")

export class RolsController{
    constructor(private readonly rolsService: RolsService){}

    @UsePipes(new ValidationPipe({whitelist:true, transform: true}))
    @Post('create')
    create(@Body() data: rols){
        return this.rolsService.create(data)
    }

    @Post('getAll')
    findAll(){
        return this.rolsService.getAll()
    }

    @Post('getOne')
    findOne(@Body('id') id: number){
        return this.rolsService.getOne(id)
    }

    @UsePipes(new ValidationPipe({
        whitelist: true,
        transform: true
    }))
    @Patch('update/:id')
    updateOne(@Body() data: rols, @Param('id') id: number){
        return this.rolsService.update(data, id)
    }

    @UsePipes(new ValidationPipe({
        transform:true,
        whitelist:true
    }))
    @Delete('delete')
    deleteOne(@Body('id') id: number){
        return this.rolsService.delete(id)
    }
}