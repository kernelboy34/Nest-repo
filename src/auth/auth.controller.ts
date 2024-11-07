import { Controller, Body, Get, Post, HttpCode, HttpStatus, UseGuards, Request } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthGuard } from "./auth.guard";
import { AuthDTO } from "./dto/auth.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@Controller('auth')
@ApiTags("Autentificacion")
export class AuthController{
    constructor(private authService: AuthService){}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    @ApiOperation({summary: "Iniciar sesion para el usuario"})
    signIn(@Body() data: AuthDTO){
        return this.authService.signIn(data)
    }

    @UseGuards(AuthGuard)
    @Get('profile')
    @ApiOperation({summary: "Perfil del usuario logueado"})
    getProfile(@Request() req){
        return req.user
    }

}