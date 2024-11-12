"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaleProductModule = void 0;
const common_1 = require("@nestjs/common");
const sale_product_service_1 = require("./sale_product.service");
const sale_product_controller_1 = require("./sale_product.controller");
const sequelize_1 = require("@nestjs/sequelize");
const sale_product_entity_1 = require("./entities/sale_product.entity");
const sequelize_provider_1 = require("../sequelize/sequelize.provider");
const rols_module_1 = require("../rol/rols.module");
const sale_product_provide_1 = require("./provide/sale_product.provide");
let SaleProductModule = class SaleProductModule {
};
exports.SaleProductModule = SaleProductModule;
exports.SaleProductModule = SaleProductModule = __decorate([
    (0, common_1.Module)({
        controllers: [sale_product_controller_1.SaleProductController],
        providers: [sale_product_service_1.SaleProductService, ...sale_product_provide_1.saleproductProvider],
        imports: [sequelize_1.SequelizeModule.forFeature([sale_product_entity_1.SaleProduct]), sequelize_provider_1.SequelizeProvider, rols_module_1.RolsModule]
    })
], SaleProductModule);
//# sourceMappingURL=sale_product.module.js.map