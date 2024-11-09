import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UserModule } from "src/user/user.module";
import { JwtModule } from "@nestjs/jwt";
import { config } from '../config/config'
import { AuthController } from "./auth.controller";
import { PassportModule } from "@nestjs/passport";
import { JwtStrategy } from "./auth.strategy";


@Module({
    providers:[AuthService, JwtStrategy],
    imports:[
        UserModule,
        PassportModule,
        JwtModule.register({
            global: true,
            secret: config.token,
            signOptions:{}
        })
    ],
    controllers:[AuthController],
    exports:[AuthService]
})
export class AuthModule{}