"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SizesModule = void 0;
const common_1 = require("@nestjs/common");
const size_service_1 = require("./size.service");
const size_controller_1 = require("./size.controller");
const rols_guard_1 = require("../rol/rols.guard");
const sequelize_1 = require("@nestjs/sequelize");
const size_entity_1 = require("./entities/size.entity");
const size_provider_1 = require("./provider/size.provider");
const sequelize_provider_1 = require("../sequelize/sequelize.provider");
const rols_module_1 = require("../rol/rols.module");
let SizesModule = class SizesModule {
};
exports.SizesModule = SizesModule;
exports.SizesModule = SizesModule = __decorate([
    (0, common_1.Module)({
        controllers: [size_controller_1.SizeController],
        providers: [size_service_1.SizeService, rols_guard_1.RolesGuard, ...size_provider_1.sizeProvider],
        exports: [size_service_1.SizeService],
        imports: [sequelize_1.SequelizeModule.forFeature([size_entity_1.Size]), sequelize_provider_1.SequelizeProvider, rols_module_1.RolsModule]
    })
], SizesModule);
//# sourceMappingURL=size.module.js.map