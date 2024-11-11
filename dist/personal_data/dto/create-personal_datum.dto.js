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
exports.CreatePersonalDatumDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreatePersonalDatumDto {
}
exports.CreatePersonalDatumDto = CreatePersonalDatumDto;
__decorate([
    (0, class_validator_1.IsInt)({ message: "El id del usuario debe ser un entero" }),
    (0, class_validator_1.IsNotEmpty)({ message: "El id del usuario no debe ser vacio" }),
    (0, swagger_1.ApiProperty)({ example: 1, description: "Id de un datos personales" }),
    __metadata("design:type", Number)
], CreatePersonalDatumDto.prototype, "user_iduser", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "El nombre no debe ser vacio" }),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ example: "Pepito", description: "Nombre que va a contener el usuario" }),
    __metadata("design:type", String)
], CreatePersonalDatumDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "El apellido no debe ser vacio" }),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ example: "Perez", description: "Apellido del usuario" }),
    __metadata("design:type", String)
], CreatePersonalDatumDto.prototype, "lastname", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: "la cuenta del banco no debe estar vacio" }),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ example: "4773727", description: "numero de la cuenta de banco" }),
    __metadata("design:type", String)
], CreatePersonalDatumDto.prototype, "bank_account", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MinLength)(8, { message: "El numero debe contener minimo 8 digitos" }),
    (0, swagger_1.ApiProperty)({ example: 38875473, description: "numero de telefono del usuario" }),
    __metadata("design:type", String)
], CreatePersonalDatumDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ example: "Plaza Murillo", description: "Direccion donde reside el usuario" }),
    __metadata("design:type", String)
], CreatePersonalDatumDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreatePersonalDatumDto.prototype, "is_deleted", void 0);
//# sourceMappingURL=create-personal_datum.dto.js.map