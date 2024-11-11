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
exports.CreateUserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateUserDto {
}
exports.CreateUserDto = CreateUserDto;
__decorate([
    (0, class_validator_1.IsInt)({ message: "La id de rols debe contener un entero" }),
    (0, class_validator_1.IsNotEmpty)({ message: "La id de rols no debe estar vacio" }),
    (0, swagger_1.ApiProperty)({ example: 1, description: "id del rol existente" }),
    __metadata("design:type", Number)
], CreateUserDto.prototype, "rols_idrols", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: "El nombre debe ser una cadena" }),
    (0, class_validator_1.IsNotEmpty)({ message: "El nombre no debe estar vacio" }),
    (0, swagger_1.ApiProperty)({ example: "Pepito", description: "Nombre del usuario" }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: "Correo Electronico no valido" }),
    (0, class_validator_1.IsNotEmpty)({ message: "Debe contener @ el correo" }),
    (0, swagger_1.ApiProperty)({ example: "user@est.univalle.edu", description: "correo del usuario" }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.MinLength)(8, { message: "La constraseña debe tener minimo una longitud de 8 caracteres" }),
    (0, class_validator_1.IsNotEmpty)({ message: "la constraseña no debe ser vacio" }),
    (0, swagger_1.ApiProperty)({ example: "Pepito1234", description: "Escriba una constraseña de mas de 8 digitos" }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateUserDto.prototype, "is_deleted", void 0);
//# sourceMappingURL=createUser.dto.js.map