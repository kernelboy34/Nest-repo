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
exports.SaleProductController = void 0;
const common_1 = require("@nestjs/common");
const sale_product_service_1 = require("./sale_product.service");
const create_sale_product_dto_1 = require("./dto/create-sale_product.dto");
const update_sale_product_dto_1 = require("./dto/update-sale_product.dto");
const swagger_1 = require("@nestjs/swagger");
const rols_guard_1 = require("../rol/rols.guard");
const rol_decorator_1 = require("../rol/decorators/rol.decorator");
let SaleProductController = class SaleProductController {
    constructor(saleProductService) {
        this.saleProductService = saleProductService;
    }
    create(createSaleProductDto) {
        return this.saleProductService.create(createSaleProductDto);
    }
    findAll() {
        return this.saleProductService.findAll();
    }
    findOne(id) {
        return this.saleProductService.findOne(+id);
    }
    update(id, updateSaleProductDto) {
        return this.saleProductService.update(+id, updateSaleProductDto);
    }
    remove(id) {
        return this.saleProductService.remove(+id);
    }
};
exports.SaleProductController = SaleProductController;
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe({
        whitelist: true,
        transform: true
    })),
    (0, common_1.Post)('create'),
    (0, swagger_1.ApiOperation)({ summary: "Crear una nueva venta de producto" }),
    (0, rol_decorator_1.Roles)('Usuario', 'Administrador'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_sale_product_dto_1.CreateSaleProductDto]),
    __metadata("design:returntype", void 0)
], SaleProductController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('findAll'),
    (0, swagger_1.ApiOperation)({ summary: "Listar todas las ventas de productos" }),
    (0, rol_decorator_1.Roles)('Usuario', 'Administrador'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SaleProductController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('findOne/:id'),
    (0, swagger_1.ApiOperation)({ summary: "Listar una venta de producto segun el id" }),
    (0, rol_decorator_1.Roles)('Usuario', 'Administrador'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SaleProductController.prototype, "findOne", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe({
        whitelist: true,
        transform: true
    })),
    (0, common_1.Patch)('updateOne/:id'),
    (0, swagger_1.ApiOperation)({ summary: "Actualizar una venta de producto segun el id" }),
    (0, rol_decorator_1.Roles)('Administrador'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_sale_product_dto_1.UpdateSaleProductDto]),
    __metadata("design:returntype", void 0)
], SaleProductController.prototype, "update", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe({
        whitelist: true,
        transform: true
    })),
    (0, common_1.Delete)('deleteOne/:id'),
    (0, swagger_1.ApiOperation)({ summary: "Eliminar una venta de producto segun el id" }),
    (0, rol_decorator_1.Roles)('Usuario', 'Administrador'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], SaleProductController.prototype, "remove", null);
exports.SaleProductController = SaleProductController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('sale_product'),
    (0, swagger_1.ApiTags)("Ventas de Productos"),
    (0, common_1.UseGuards)(rols_guard_1.RolesGuard),
    __metadata("design:paramtypes", [sale_product_service_1.SaleProductService])
], SaleProductController);
//# sourceMappingURL=sale_product.controller.js.map