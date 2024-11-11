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
exports.CreateSaleProductDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateSaleProductDto {
}
exports.CreateSaleProductDto = CreateSaleProductDto;
__decorate([
    (0, class_validator_1.IsInt)({ message: "El id de la venta debe ser un numero" }),
    (0, class_validator_1.IsNotEmpty)({ message: "El id de la venta no debe ser vacio" }),
    (0, swagger_1.ApiProperty)({ example: 1, description: "Incersion de un id valido de venta" }),
    __metadata("design:type", Number)
], CreateSaleProductDto.prototype, "sales_idsales", void 0);
__decorate([
    (0, class_validator_1.IsInt)({ message: "El id del producto debe ser un entero" }),
    (0, class_validator_1.IsNotEmpty)({ message: "El id del producto no debe ser vacio" }),
    (0, swagger_1.ApiProperty)({ example: 1, description: "Incersion de un id valido de producto" }),
    __metadata("design:type", Number)
], CreateSaleProductDto.prototype, "products_idproducts", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: "la cantidad no debe ser un vacio" }),
    (0, swagger_1.ApiProperty)({ example: "10", description: "incersion de una cantidad valida" }),
    __metadata("design:type", String)
], CreateSaleProductDto.prototype, "quantity", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({ example: 12.3, description: "Incersion de un precio total en decimal o entero" }),
    __metadata("design:type", Number)
], CreateSaleProductDto.prototype, "total_price", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateSaleProductDto.prototype, "is_deleted", void 0);
//# sourceMappingURL=create-sale_product.dto.js.map