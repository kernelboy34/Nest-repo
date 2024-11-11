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
exports.CreateSaleDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateSaleDto {
}
exports.CreateSaleDto = CreateSaleDto;
__decorate([
    (0, class_validator_1.IsInt)({ message: "El id del usuario deber ser un entero" }),
    (0, class_validator_1.IsNotEmpty)({ message: "El id del usuario no debe ser vacio" }),
    (0, swagger_1.ApiProperty)({ example: 1, description: "Creacion de un nuevo usuario con un id valido" }),
    __metadata("design:type", Number)
], CreateSaleDto.prototype, "user_iduser", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ example: new Date().toISOString() }),
    __metadata("design:type", String)
], CreateSaleDto.prototype, "date_sale", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ example: 0, description: "Valor de un estado" }),
    __metadata("design:type", Number)
], CreateSaleDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateSaleDto.prototype, "is_deleted", void 0);
//# sourceMappingURL=create-sale.dto.js.map