import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { PrismaService } from "src/prisma/prisma.service";;
import { RolesGuard } from "src/rol/rols.guard";


@Module({
    controllers:[UserController],
    providers:[UserService, PrismaService,RolesGuard],
    exports:[UserService],
    imports:[]
})

export class UserModule{}