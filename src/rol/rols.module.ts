import { Module } from "@nestjs/common";
import { RolsController } from "./rols.controller";
import { PrismaService } from "src/prisma/prisma.service";
import { RolsService } from "./rols.service";


@Module({
    controllers:[RolsController],
    providers:[PrismaService, RolsService]
})
export class RolsModule{}