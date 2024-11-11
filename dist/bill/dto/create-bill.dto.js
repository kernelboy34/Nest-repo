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
exports.CreateBillDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateBillDto {
}
exports.CreateBillDto = CreateBillDto;
__decorate([
    (0, class_validator_1.IsInt)({ message: "El id de la venta debe ser entero" }),
    (0, class_validator_1.IsNotEmpty)({ message: "El id de la venta no debe estar vacio" }),
    (0, swagger_1.ApiProperty)({ example: 1, description: "El id de la venta para la factura" }),
    __metadata("design:type", Number)
], CreateBillDto.prototype, "sales_idsales", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({ example: 12.3, description: "El precio total de una factura" }),
    __metadata("design:type", Number)
], CreateBillDto.prototype, "total_price", void 0);
//# sourceMappingURL=create-bill.dto.js.map