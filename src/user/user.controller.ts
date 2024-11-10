import { Controller, Body, Get, Patch, Post, Put, Delete, Param, Query, ValidationPipe, UsePipes, UseGuards} from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/createUser.dto";

import { UpdateUserDto } from "./dto/updateUser.dto";
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/auth/auth.guard";
import { Roles } from "src/rol/decorators/rol.decorator";
import { RolesGuard } from "src/rol/rols.guard";

@ApiBearerAuth()
@ApiTags("Usuarios")
@UseGuards(RolesGuard)
@Controller('user')
export class UserController{
    constructor(private readonly userService: UserService){}

    @UsePipes(new ValidationPipe({ transform: true, whitelist: true}))
    @Post('create')
    @ApiOperation({summary: "Crear un nuevo usuario"})
    @ApiResponse({status: 201 , example: "Se ha creado un usuario"})
    @Roles('Administrador')
    create(@Body() createUser: CreateUserDto){
        return this.userService.create(createUser)
    }
    
    @ApiOperation({summary: "Listar todos los usuarios"})
    @Get('findAll')
    @Roles('Administrador')
    findAll(){
        return this.userService.findAll()
    }

    @UsePipes(new ValidationPipe({
        whitelist: true,
        transform: true
    }))
    @ApiOperation({summary: "Listar un usuario por email"})
    @Get('findOne/:email')
    @Roles('Usuario', 'Administrador')
    findOne(@Param('email') email: string){
        return this.userService.findOne(email)
    }

    @UsePipes(new ValidationPipe({whitelist:true, transform: true}))
    @ApiOperation({summary: "Busqueda personalizada para el autentificacion"})
    @Get('findOneToLogin/:email')
    @Roles('Administrador')
    findOneToLogin(@Param('email') email: string){
        return this.userService.findOneToLogin(email) 
    }

    @UsePipes(new ValidationPipe({
        whitelist: true,
        transform: true
    }))
    @Patch('updateOne/:id')
    @ApiOperation({summary: "Actualizar un usuario"})
    @Roles('Administrador')
    updateOne(@Param('id') id: number, @Body() data : UpdateUserDto){ 
        return this.userService.update(data, +id)
    }

    @UsePipes(new ValidationPipe({whitelist:true, transform: true}))
    @Delete('deleteOne/:id')
    @ApiOperation({summary: "Eliminacion de un usuario segun el id"})
    @Roles('Administrador')
    deleteOne(@Param('id') id: number){
        return this.userService.delete(+id)
    }
}