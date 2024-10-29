import { Controller, Body, Get, Patch, Post, Put, Delete, Param, Query, ValidationPipe, UsePipes} from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/createUser.dto";

import { UpdateUserDto } from "./dto/updateUser.dto";

@Controller('user')
export class UserController{
    constructor(private readonly userService: UserService){}

    @UsePipes(new ValidationPipe({ transform: true, whitelist: true}))
    @Post('create')
    create(@Body() createUser: CreateUserDto){
        return this.userService.create(createUser)
    }
    
    @Get('findAll')
    findAll(){
        return this.userService.findAll()
    }

    @UsePipes(new ValidationPipe({
        whitelist: true,
        transform: true
    }))
    @UsePipes(new ValidationPipe({whitelist:true}))
    @Post('findOne')
    findOne(@Body('email') email: string){
        return this.userService.findOne(email)
    }

    @UsePipes(new ValidationPipe({
        whitelist: true,
        transform: true
    }))
    @Patch('updateOne/:id')
    updateOne(@Param('id') id: number, @Body() data : UpdateUserDto){ 
        return this.userService.update(data, +id)
    }

    @UsePipes(new ValidationPipe({whitelist:true, transform: true}))
    @Delete('deleteOne')
    deleteOne(@Body('id') id: number){
        return this.userService.delete(id)
    }
}