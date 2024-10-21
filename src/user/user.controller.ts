import { Controller, Body, Get, Patch, Post, Put, Delete, Param, Query} from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/createUser.dto";

import { UpdateUserDto } from "./dto/updateUser.dto";


@Controller('user')
export class UserController{
    constructor(private readonly userService: UserService){}

    @Post('create')
    async create(@Body() createUser: CreateUserDto){
        return await this.userService.create(createUser)
    }
    
    @Post('findAll')
    async findAll(){
        return await this.userService.findAll()
    }

    @Post('findOne')
    async findOne(@Body('email') email: string){
        return await this.userService.findOne(email)
    }

    @Put('updateOne/:id')
    async updateOne(@Param('id') id: number, @Body() data : UpdateUserDto){ 
        return await this.userService.update(data, +id)
    }

    @Delete('deleteOne')
    async deleteOne(@Body('id') id: number){
        return await this.userService.delete(id)
    }
}