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
exports.DatosGeocService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let DatosGeocService = class DatosGeocService {
    constructor(datosGeocModel) {
        this.datosGeocModel = datosGeocModel;
    }
    async create(datos) {
        const newDatos = new this.datosGeocModel(datos);
        return newDatos.save();
    }
    async findAll() {
        return this.datosGeocModel.find().exec();
    }
    async findById(objectId) {
        const datos = await this.datosGeocModel.findOne({ OBJECTID: objectId }).exec();
        if (!datos) {
            throw new common_1.NotFoundException(`DatosGeoc con OBJECTID ${objectId} no encontrado`);
        }
        return datos;
    }
    async update(objectId, datos) {
        const updatedDatos = await this.datosGeocModel
            .findOneAndUpdate({ OBJECTID: objectId }, datos, { new: true })
            .exec();
        if (!updatedDatos) {
            throw new common_1.NotFoundException(`DatosGeoc con OBJECTID ${objectId} no encontrado`);
        }
        return updatedDatos;
    }
    async delete(objectId) {
        const deletedDatos = await this.datosGeocModel.findOneAndDelete({ OBJECTID: objectId }).exec();
        if (!deletedDatos) {
            throw new common_1.NotFoundException(`DatosGeoc con OBJECTID ${objectId} no encontrado`);
        }
        return deletedDatos;
    }
};
exports.DatosGeocService = DatosGeocService;
exports.DatosGeocService = DatosGeocService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('DatosGeoc')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], DatosGeocService);
//# sourceMappingURL=datos-geoc.service.js.map