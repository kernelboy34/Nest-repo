import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { JwtAuthGuard } from "src/auth/auth.guard";
import { Rol } from "./entity/rol.entity";
export declare class RolesGuard extends JwtAuthGuard implements CanActivate {
    private reflector;
    private rolRepository;
    constructor(reflector: Reflector, rolRepository: typeof Rol);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
