import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UserModule } from "src/user/user.module";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "./constants";
import { UserService } from "src/user/user.service";
import { AuthController } from "./auth.controller";


@Module({
    providers:[AuthService],
    imports:[
        UserModule,
        JwtModule.register({
            global: true,
            secret: jwtConstants.secret,
            signOptions:{}
        })
    ],
    controllers:[AuthController],
    exports:[AuthService]
})
export class AuthModule{}