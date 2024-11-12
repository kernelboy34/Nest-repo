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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolsController = void 0;
const common_1 = require("@nestjs/common");
const rols_service_1 = require("./rols.service");
const rols_dto_1 = require("./dto/rols.dto");
const rolsupdate_dto_1 = require("./dto/rolsupdate.dto");
const swagger_1 = require("@nestjs/swagger");
const rol_decorator_1 = require("./decorators/rol.decorator");
const rols_guard_1 = require("./rols.guard");
let RolsController = class RolsController {
    constructor(rolsService) {
        this.rolsService = rolsService;
    }
    create(data) {
        return this.rolsService.create(data);
    }
    findAll() {
        return this.rolsService.findAll();
    }
    findOne(id) {
        return this.rolsService.findOne(+id);
    }
    updateOne(data, id) {
        return this.rolsService.updateOne(data, id);
    }
    deleteOne(id) {
        return this.rolsService.deleteOne(id);
    }
};
exports.RolsController = RolsController;
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true, transform: true })),
    (0, common_1.Post)('create'),
    (0, swagger_1.ApiOperation)({ summary: "Creat un nuevo rol" }),
    (0, rol_decorator_1.Roles)('Administrador'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [rols_dto_1.CreateRolsDto]),
    __metadata("design:returntype", Promise)
], RolsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('findAll'),
    (0, rol_decorator_1.Roles)('Usuario', 'Administrador'),
    (0, swagger_1.ApiOperation)({ summary: "Listar todos los roles" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RolsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('findOne/:id'),
    (0, swagger_1.ApiOperation)({ summary: "Listar un rol segun el id" }),
    (0, rol_decorator_1.Roles)('Administrador', 'Usuario'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RolsController.prototype, "findOne", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe({
        whitelist: true,
        transform: true
    })),
    (0, common_1.Patch)('updateOne/:id'),
    (0, swagger_1.ApiOperation)({ summary: "Actualizar un rol segun el id" }),
    (0, rol_decorator_1.Roles)('Administrador'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [rolsupdate_dto_1.UpdateRolsDto, Number]),
    __metadata("design:returntype", void 0)
], RolsController.prototype, "updateOne", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe({
        transform: true,
        whitelist: true
    })),
    (0, common_1.Delete)('deleteOne/:id'),
    (0, swagger_1.ApiOperation)({ summary: "Eliminar un rol segun el id" }),
    (0, rol_decorator_1.Roles)('Administrador'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], RolsController.prototype, "deleteOne", null);
exports.RolsController = RolsController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)("rols"),
    (0, swagger_1.ApiTags)("Roles"),
    (0, common_1.UseGuards)(rols_guard_1.RolesGuard),
    __metadata("design:paramtypes", [rols_service_1.RolsService])
], RolsController);
//# sourceMappingURL=rols.controller.js.map