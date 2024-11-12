"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolsModule = void 0;
const common_1 = require("@nestjs/common");
const rols_controller_1 = require("./rols.controller");
const rols_service_1 = require("./rols.service");
const rols_provider_1 = require("./provider/rols.provider");
const sequelize_1 = require("@nestjs/sequelize");
const rol_entity_1 = require("./entity/rol.entity");
const sequelize_provider_1 = require("../sequelize/sequelize.provider");
let RolsModule = class RolsModule {
};
exports.RolsModule = RolsModule;
exports.RolsModule = RolsModule = __decorate([
    (0, common_1.Module)({
        controllers: [rols_controller_1.RolsController],
        providers: [rols_service_1.RolsService, ...rols_provider_1.rolProvider],
        imports: [
            sequelize_1.SequelizeModule.forFeature([rol_entity_1.Rol]),
            sequelize_provider_1.SequelizeProvider
        ],
        exports: [RolsModule, ...rols_provider_1.rolProvider]
    })
], RolsModule);
//# sourceMappingURL=rols.module.js.map