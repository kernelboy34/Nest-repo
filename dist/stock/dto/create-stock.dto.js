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
exports.CreateStockDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateStockDto {
}
exports.CreateStockDto = CreateStockDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "La id del departamento no debe estar vacio" }),
    (0, class_validator_1.IsInt)({ message: "La sucursal debe ser un entero" }),
    (0, swagger_1.ApiProperty)({ example: 1, description: "Insercion de un sucursal existente" }),
    __metadata("design:type", Number)
], CreateStockDto.prototype, "branches_idbranches", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "La el id del producto no debe ser vacio" }),
    (0, class_validator_1.IsInt)({ message: "La id del producto debe ser un entero" }),
    (0, swagger_1.ApiProperty)({ example: 1, description: "Insercion de un producto existente" }),
    __metadata("design:type", Number)
], CreateStockDto.prototype, "products_idproducts", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({ example: "10", description: "Insercion de una cantidad" }),
    __metadata("design:type", Number)
], CreateStockDto.prototype, "quantity", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateStockDto.prototype, "is_deleted", void 0);
//# sourceMappingURL=create-stock.dto.js.map