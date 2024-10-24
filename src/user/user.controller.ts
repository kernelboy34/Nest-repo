import { Controller, Body, Get, Patch, Post, Put, Delete, Param, Query, ValidationPipe, UsePipes} from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/createUser.dto";

import { UpdateUserDto } from "./dto/updateUser.dto";

@Controller('user')
export class UserController{
    constructor(private readonly userService: UserService){}

    @UsePipes(new ValidationPipe({ transform: true, whitelist: true}))
    @Post('create')
    async create(@Body() createUser: CreateUserDto){
        return this.userService.create(createUser)
    }
    
    @Get('findAll')
    async findAll(){
        return await this.userService.findAll()
    }

    @UsePipes(new ValidationPipe({
        whitelist: true,
        transform: true
    }))
    @UsePipes(new ValidationPipe({whitelist:true}))
    @Post('findOne')
    async findOne(@Body('email') email: string){
        return await this.userService.findOne(email)
    }

    @UsePipes(new ValidationPipe({
        whitelist: true,
        transform: true
    }))
    @Patch('updateOne/:id')
    async updateOne(@Param('id') id: number, @Body() data : UpdateUserDto){ 
        return await this.userService.update(data, +id)
    }

    @UsePipes(new ValidationPipe({whitelist:true, transform: true}))
    @Delete('deleteOne')
    async deleteOne(@Body('id') id: number){
        return await this.userService.delete(id)
    }
}