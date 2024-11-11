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
exports.PersonalDataController = void 0;
const common_1 = require("@nestjs/common");
const personal_data_service_1 = require("./personal_data.service");
const create_personal_datum_dto_1 = require("./dto/create-personal_datum.dto");
const update_personal_datum_dto_1 = require("./dto/update-personal_datum.dto");
const swagger_1 = require("@nestjs/swagger");
const rols_guard_1 = require("../rol/rols.guard");
const rol_decorator_1 = require("../rol/decorators/rol.decorator");
let PersonalDataController = class PersonalDataController {
    constructor(personalDataService) {
        this.personalDataService = personalDataService;
    }
    create(data) {
        return this.personalDataService.create(data);
    }
    findAll() {
        return this.personalDataService.findAll();
    }
    findOne(id) {
        return this.personalDataService.findOne(+id);
    }
    update(id, updatePersonalDatumDto) {
        return this.personalDataService.update(+id, updatePersonalDatumDto);
    }
    remove(id) {
        return this.personalDataService.remove(+id);
    }
};
exports.PersonalDataController = PersonalDataController;
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe({
        whitelist: true,
        transform: true
    })),
    (0, common_1.Post)('create'),
    (0, swagger_1.ApiOperation)({ summary: "Crear un nuevo dato personal" }),
    (0, rol_decorator_1.Roles)('Administrador'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_personal_datum_dto_1.CreatePersonalDatumDto]),
    __metadata("design:returntype", void 0)
], PersonalDataController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('findAll'),
    (0, swagger_1.ApiOperation)({ summary: "Listar todos los datos personal" }),
    (0, rol_decorator_1.Roles)('Administrador', 'Usuario'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PersonalDataController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('findOne/:id'),
    (0, swagger_1.ApiOperation)({ summary: "Listar un dato personal segun el id" }),
    (0, rol_decorator_1.Roles)('Administrador', 'Usuario'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PersonalDataController.prototype, "findOne", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe({
        whitelist: true,
        transform: true
    })),
    (0, common_1.Patch)('updateOne/:id'),
    (0, swagger_1.ApiOperation)({ summary: "Actualizar un dato personal segun el id" }),
    (0, rol_decorator_1.Roles)('Usuario'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_personal_datum_dto_1.UpdatePersonalDatumDto]),
    __metadata("design:returntype", void 0)
], PersonalDataController.prototype, "update", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe({
        whitelist: true,
        transform: true
    })),
    (0, common_1.Delete)('deleteOne/:id'),
    (0, swagger_1.ApiOperation)({ summary: "Eliminar un dato personal segun el id" }),
    (0, rol_decorator_1.Roles)('Administrador'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PersonalDataController.prototype, "remove", null);
exports.PersonalDataController = PersonalDataController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('personal_data'),
    (0, swagger_1.ApiTags)("Datos Personales"),
    (0, common_1.UseGuards)(rols_guard_1.RolesGuard),
    __metadata("design:paramtypes", [personal_data_service_1.PersonalDataService])
], PersonalDataController);
//# sourceMappingURL=personal_data.controller.js.map