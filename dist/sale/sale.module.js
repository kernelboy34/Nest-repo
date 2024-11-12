"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleModule = void 0;
const common_1 = require("@nestjs/common");
const sale_service_1 = require("./sale.service");
const sale_controller_1 = require("./sale.controller");
const sequelize_1 = require("@nestjs/sequelize");
const sale_entity_1 = require("./entities/sale.entity");
const sequelize_provider_1 = require("../sequelize/sequelize.provider");
const sale_provide_1 = require("./provide/sale.provide");
let SaleModule = class SaleModule {
};
exports.SaleModule = SaleModule;
exports.SaleModule = SaleModule = __decorate([
    (0, common_1.Module)({
        controllers: [sale_controller_1.SaleController],
        providers: [sale_service_1.SaleService, ...sale_provide_1.saleProvider],
        imports: [sequelize_1.SequelizeModule.forFeature([sale_entity_1.Sale]), sequelize_provider_1.SequelizeProvider]
    })
], SaleModule);
//# sourceMappingURL=sale.module.js.map