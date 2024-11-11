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
exports.ProductSizeController = void 0;
const common_1 = require("@nestjs/common");
const product_size_service_1 = require("./product_size.service");
const create_product_size_dto_1 = require("./dto/create-product_size.dto");
const update_product_size_dto_1 = require("./dto/update-product_size.dto");
const swagger_1 = require("@nestjs/swagger");
const rols_guard_1 = require("../rol/rols.guard");
const rol_decorator_1 = require("../rol/decorators/rol.decorator");
let ProductSizeController = class ProductSizeController {
    constructor(productSizeService) {
        this.productSizeService = productSizeService;
    }
    create(createProductSizeDto) {
        return this.productSizeService.create(createProductSizeDto);
    }
    findAll() {
        return this.productSizeService.findAll();
    }
    findOne(id) {
        return this.productSizeService.findOne(+id);
    }
    update(id, updateProductSizeDto) {
        return this.productSizeService.update(+id, updateProductSizeDto);
    }
    remove(id) {
        return this.productSizeService.remove(+id);
    }
};
exports.ProductSizeController = ProductSizeController;
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe({
        whitelist: true,
        transform: true
    })),
    (0, common_1.Post)('create'),
    (0, swagger_1.ApiOperation)({ summary: "Crear un tamaño del producto" }),
    (0, rol_decorator_1.Roles)('Administrador'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_size_dto_1.CreateProductSizeDto]),
    __metadata("design:returntype", void 0)
], ProductSizeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('findAll'),
    (0, swagger_1.ApiOperation)({ summary: "Listar todos los tamaños de productos" }),
    (0, rol_decorator_1.Roles)('Administrador', 'Usuario'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductSizeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('findOne/:id'),
    (0, swagger_1.ApiOperation)({ summary: "Listar un tamaño de producto por id" }),
    (0, rol_decorator_1.Roles)('Administrador', 'Usuario'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductSizeController.prototype, "findOne", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe({
        whitelist: true,
        transform: true
    })),
    (0, common_1.Patch)('updateOne/:id'),
    (0, swagger_1.ApiOperation)({ summary: "Actualizar un tamaño de producto segun el id" }),
    (0, rol_decorator_1.Roles)('Administrador'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_product_size_dto_1.UpdateProductSizeDto]),
    __metadata("design:returntype", void 0)
], ProductSizeController.prototype, "update", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe({
        whitelist: true,
        transform: true
    })),
    (0, common_1.Delete)('deleteOne/:id'),
    (0, swagger_1.ApiOperation)({ summary: "Eliminar un tamaño de producto segun el id" }),
    (0, rol_decorator_1.Roles)('Administrador'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductSizeController.prototype, "remove", null);
exports.ProductSizeController = ProductSizeController = __decorate([
    (0, common_1.Controller)('product_size'),
    (0, swagger_1.ApiTags)('Tamaño de los Productos'),
    (0, common_1.UseGuards)(rols_guard_1.RolesGuard),
    __metadata("design:paramtypes", [product_size_service_1.ProductSizeService])
], ProductSizeController);
//# sourceMappingURL=product_size.controller.js.map