import { Controller, Get, Put, Post, Patch, Delete, Body, Param, UsePipes, ValidationPipe} from "@nestjs/common";
import { RolsService } from "./rols.service";
import { rols } from "@prisma/client";


@Controller("rols")

export class RolsController{
    constructor(private readonly rolsService: RolsService){}

    @UsePipes(new ValidationPipe({whitelist:true}))
    @Post('create')
    async create(@Body() data: rols){
        return this.rolsService.create(data)
    }

    @Post('getAll')
    async findAll(){
        return await this.rolsService.getAll()
    }

    @Post('getOne')
    async findOne(@Body('id') id: number){
        return this.rolsService.getOne(id)
    }

    @Put('update/:id')
    async updateOne(@Body() data: rols, @Param('id') id: number){
        return this.rolsService.udpate(data, id)
    }

    @Delete('delete')
    async deleteOne(@Body('id') id: number){
        return this.rolsService.delete(id)
    }
}