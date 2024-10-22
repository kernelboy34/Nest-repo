import { Controller, Body, Get, Post, HttpCode, HttpStatus, UseGuards, Request } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthGuard } from "./auth.guard";

@Controller('auth')
export class AuthController{
    constructor(private authService: AuthService){}


    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body('email') email: string, @Body('pass')pass: string){
        return this.authService.signIn(email, pass)
    }

    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req){
        return req.user
    }

}