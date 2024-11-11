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
exports.SaleController = void 0;
const common_1 = require("@nestjs/common");
const sale_service_1 = require("./sale.service");
const create_sale_dto_1 = require("./dto/create-sale.dto");
const update_sale_dto_1 = require("./dto/update-sale.dto");
const swagger_1 = require("@nestjs/swagger");
let SaleController = class SaleController {
    constructor(saleService) {
        this.saleService = saleService;
    }
    create(createSaleDto) {
        return this.saleService.create(createSaleDto);
    }
    findAll() {
        return this.saleService.findAll();
    }
    findOne(id) {
        return this.saleService.findOne(+id);
    }
    update(id, updateSaleDto) {
        return this.saleService.update(+id, updateSaleDto);
    }
    remove(id) {
        return this.saleService.remove(+id);
    }
};
exports.SaleController = SaleController;
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe({
        whitelist: true,
        transform: true
    })),
    (0, common_1.Post)('create'),
    (0, swagger_1.ApiOperation)({ summary: "Crear una nueva venta" }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_sale_dto_1.CreateSaleDto]),
    __metadata("design:returntype", void 0)
], SaleController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('findAll'),
    (0, swagger_1.ApiOperation)({ summary: "Listar todas las ventas" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SaleController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('findOne/:id'),
    (0, swagger_1.ApiOperation)({ summary: "Listar una venta segun el id" }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SaleController.prototype, "findOne", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe({
        whitelist: true,
        transform: true
    })),
    (0, common_1.Patch)('updateOne/:id'),
    (0, swagger_1.ApiOperation)({ summary: "Actualizar una venta por el id" }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_sale_dto_1.UpdateSaleDto]),
    __metadata("design:returntype", void 0)
], SaleController.prototype, "update", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe({
        whitelist: true,
        transform: true
    })),
    (0, common_1.Delete)('deleteOne/:id'),
    (0, swagger_1.ApiOperation)({ summary: "Eliminar una venta por el id" }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SaleController.prototype, "remove", null);
exports.SaleController = SaleController = __decorate([
    (0, common_1.Controller)('sale'),
    (0, swagger_1.ApiTags)("Ventas"),
    __metadata("design:paramtypes", [sale_service_1.SaleService])
], SaleController);
//# sourceMappingURL=sale.controller.js.map