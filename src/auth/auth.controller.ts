import { Controller, Body, Get, Post, HttpCode, HttpStatus, UseGuards, Request } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDTO } from "./dto/auth.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { Forgot_TokenDto } from "./dto/token_forgot.dto";
import { ResetTokenDto } from "./dto/token_reset.dto";

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

    @Post('forgot-password')
    @ApiOperation({summary: "Olvide mi contraseña"})
    async forgotPassword(@Body() email: Forgot_TokenDto){
        return this.authService.forgotPassword(email)
    }

    @Post('reset-password')
    @ApiOperation({summary: "resetear contraseña una vez recibido el token"})
    async resetPassword(@Body() data: ResetTokenDto){
        return this.authService.resetPassword(data)
    }
}