import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { JwtAuthGuard } from "src/auth/auth.guard";
import { PrismaService } from "src/prisma/prisma.service";
export declare class RolesGuard extends JwtAuthGuard implements CanActivate {
    private reflector;
    private db;
    constructor(reflector: Reflector, db: PrismaService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
