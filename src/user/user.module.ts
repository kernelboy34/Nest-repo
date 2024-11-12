import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { RolesGuard } from "src/rol/rols.guard";
import { usersProvider } from "./providers/user.provider";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./entity/user.entity";
import { SequelizeProvider } from "src/sequelize/sequelize.provider";
import { rolProvider } from "src/rol/provider/rols.provider";
import { RolsModule } from "src/rol/rols.module";


@Module({
    controllers:[UserController],
    providers:[
        UserService,
        RolesGuard,
        ...usersProvider,
        ...rolProvider
    ],
    exports:[UserService],
    imports:[SequelizeModule.forFeature([User]), SequelizeProvider, RolsModule]
})

export class UserModule{}