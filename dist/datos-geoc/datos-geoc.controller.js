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
exports.DatosGeocController = void 0;
const common_1 = require("@nestjs/common");
const datos_geoc_service_1 = require("./datos-geoc.service");
const datos_geoc_module_1 = require("./datos-geoc.module");
let DatosGeocController = class DatosGeocController {
    constructor(datosGeocService) {
        this.datosGeocService = datosGeocService;
    }
    async create(datosGeoc) {
        return this.datosGeocService.create(datosGeoc);
    }
    async findAll() {
        return this.datosGeocService.findAll();
    }
    async findOne(objectId) {
        return this.datosGeocService.findById(objectId);
    }
    async update(objectId, datosGeoc) {
        return this.datosGeocService.update(objectId, datosGeoc);
    }
    async delete(objectId) {
        return this.datosGeocService.delete(objectId);
    }
};
exports.DatosGeocController = DatosGeocController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [datos_geoc_module_1.DatosGeoc]),
    __metadata("design:returntype", Promise)
], DatosGeocController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DatosGeocController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':objectId'),
    __param(0, (0, common_1.Param)('objectId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DatosGeocController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':objectId'),
    __param(0, (0, common_1.Param)('objectId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], DatosGeocController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':objectId'),
    __param(0, (0, common_1.Param)('objectId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DatosGeocController.prototype, "delete", null);
exports.DatosGeocController = DatosGeocController = __decorate([
    (0, common_1.Controller)('datos-geoc'),
    __metadata("design:paramtypes", [datos_geoc_service_1.DatosGeocService])
], DatosGeocController);
//# sourceMappingURL=datos-geoc.controller.js.map