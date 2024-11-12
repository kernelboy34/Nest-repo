"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSizeModule = void 0;
const common_1 = require("@nestjs/common");
const product_size_service_1 = require("./product_size.service");
const product_size_controller_1 = require("./product_size.controller");
const product_size_provider_1 = require("./provider/product_size.provider");
const sequelize_1 = require("@nestjs/sequelize");
const product_size_entity_1 = require("./entities/product_size.entity");
const rols_module_1 = require("../rol/rols.module");
let ProductSizeModule = class ProductSizeModule {
};
exports.ProductSizeModule = ProductSizeModule;
exports.ProductSizeModule = ProductSizeModule = __decorate([
    (0, common_1.Module)({
        controllers: [product_size_controller_1.ProductSizeController],
        providers: [product_size_service_1.ProductSizeService, ...product_size_provider_1.productsizeProvider],
        imports: [sequelize_1.SequelizeModule.forFeature([product_size_entity_1.ProductSize]), sequelize_1.SequelizeModule, rols_module_1.RolsModule]
    })
], ProductSizeModule);
//# sourceMappingURL=product_size.module.js.map