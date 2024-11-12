import { Injectable, CanActivate, ExecutionContext, ForbiddenException, Inject } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { JwtAuthGuard } from "src/auth/auth.guard";
import { ROLES_KEY } from "./decorators/rol.decorator";
import { Rol } from "./entity/rol.entity";
import { Op } from "sequelize";

@Injectable()
export class RolesGuard extends JwtAuthGuard implements CanActivate{
    constructor(
        private reflector: Reflector,
        @Inject("ROLS_REPOSITORY")
        private rolRepository: typeof Rol
    ){
        super()
    }

    async canActivate(context: ExecutionContext): Promise<boolean>{
        const isAuthenticated = await super.canActivate(context)
        if(!isAuthenticated) return false

        const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
            context.getHandler(),
            context.getClass()
        ])

        if(!requiredRoles){
            return true
        }

        const request = context.switchToHttp().getRequest()
        const user = request.user
        console.log("data:",user)
        console.log("Usuario:",user)
        console.log("Rols:",user.rol)


        const userRole = await this.rolRepository.findOne({
            where:{
                name: {
                    [Op.eq]:user.rol
                }
            }
        })
        console.log("User Role:", userRole?.name);
        console.log("Required Roles:", requiredRoles);

        if(!userRole || !requiredRoles.includes(userRole.name)){
            throw new ForbiddenException("No tiene los permisos necesarios para acceder a este contenido")
        }
        return true
    }
}