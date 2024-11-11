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
const prisma_service_1 = require("../prisma/prisma.service");
const rols_service_1 = require("./rols.service");
let RolsModule = class RolsModule {
};
exports.RolsModule = RolsModule;
exports.RolsModule = RolsModule = __decorate([
    (0, common_1.Module)({
        controllers: [rols_controller_1.RolsController],
        providers: [prisma_service_1.PrismaService, rols_service_1.RolsService]
    })
], RolsModule);
//# sourceMappingURL=rols.module.js.map