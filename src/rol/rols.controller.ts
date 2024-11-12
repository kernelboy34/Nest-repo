import { Controller, Get, Put, Post, Patch, Delete, Body, Param, UsePipes, ValidationPipe, UseGuards} from "@nestjs/common";
import { RolsService } from "./rols.service";
import { CreateRolsDto } from "./dto/rols.dto";
import { UpdateRolsDto } from "./dto/rolsupdate.dto";
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger";
import { Roles } from "./decorators/rol.decorator";
import { RolesGuard } from "./rols.guard";
import { Rol } from "./entity/rol.entity";

@ApiBearerAuth()
@Controller("rols")
@ApiTags("Roles")
@UseGuards(RolesGuard)
export class RolsController{
    constructor(private readonly rolsService: RolsService){}

    @UsePipes(new ValidationPipe({whitelist:true, transform: true}))
    @Post('create')
    @ApiOperation({summary: "Creat un nuevo rol"})
    @Roles('Administrador')
    create(@Body() data: CreateRolsDto): Promise<Rol>{
        return this.rolsService.create(data)
    }

    @Get('findAll')
    @Roles('Usuario', 'Administrador')
    @ApiOperation({summary: "Listar todos los roles"})
    findAll(){
        return this.rolsService.findAll()
    }

    @Get('findOne/:id')
    @ApiOperation({summary: "Listar un rol segun el id"})
    @Roles('Administrador', 'Usuario')
    findOne(@Param('id') id: number){
        return this.rolsService.findOne(+id)
    }

    @UsePipes(new ValidationPipe({
        whitelist: true,
        transform: true
    }))
    @Patch('updateOne/:id')
    @ApiOperation({summary: "Actualizar un rol segun el id"})
    @Roles('Administrador')
    updateOne(@Body() data: UpdateRolsDto, @Param('id') id: number){
        return this.rolsService.updateOne(data, id)
    }

    @UsePipes(new ValidationPipe({
        transform:true,
        whitelist:true
    }))
    @Delete('deleteOne/:id')
    @ApiOperation({summary: "Eliminar un rol segun el id"})
    @Roles('Administrador')
    deleteOne(@Param('id') id: number){
        return this.rolsService.deleteOne(id)
    }
}