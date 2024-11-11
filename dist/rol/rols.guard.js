"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const auth_guard_1 = require("../auth/auth.guard");
const rol_decorator_1 = require("./decorators/rol.decorator");
const prisma_service_1 = require("../prisma/prisma.service");
let RolesGuard = class RolesGuard extends auth_guard_1.JwtAuthGuard {
    constructor(reflector, db) {
        super();
        this.reflector = reflector;
        this.db = db;
    }
    async canActivate(context) {
        const isAuthenticated = await super.canActivate(context);
        if (!isAuthenticated)
            return false;
        const requiredRoles = this.reflector.getAllAndOverride(rol_decorator_1.ROLES_KEY, [
            context.getHandler(),
            context.getClass()
        ]);
        if (!requiredRoles) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        console.log(user);
        console.log(user.rol);
        const userRole = await this.db.rols.findFirst({
            where: {
                name: user.rol
            }
        });
        console.log("User Role:", userRole?.name);
        console.log("Required Roles:", requiredRoles);
        if (!userRole || !requiredRoles.includes(userRole.name)) {
            throw new common_1.ForbiddenException("No tiene los permisos necesarios para acceder a este contenido");
        }
        return true;
    }
};
exports.RolesGuard = RolesGuard;
exports.RolesGuard = RolesGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector,
        prisma_service_1.PrismaService])
], RolesGuard);
//# sourceMappingURL=rols.guard.js.map