import { Module } from "@nestjs/common";
import { RolsController } from "./rols.controller";
import { RolsService } from "./rols.service";
import { rolProvider } from "./provider/rols.provider";
import { SequelizeModule } from "@nestjs/sequelize";
import { Rol } from "./entity/rol.entity";
import { SequelizeProvider } from "src/sequelize/sequelize.provider";


@Module({
    controllers:[RolsController],
    providers:[RolsService, ...rolProvider],
    imports:[
        SequelizeModule.forFeature([Rol]),
        SequelizeProvider
    ],
    exports:[RolsModule, ...rolProvider]
})
export class RolsModule{}