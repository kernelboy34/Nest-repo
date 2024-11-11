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
const prisma_service_1 = require("../prisma/prisma.service");
let SaleProductModule = class SaleProductModule {
};
exports.SaleProductModule = SaleProductModule;
exports.SaleProductModule = SaleProductModule = __decorate([
    (0, common_1.Module)({
        controllers: [sale_product_controller_1.SaleProductController],
        providers: [sale_product_service_1.SaleProductService, prisma_service_1.PrismaService],
    })
], SaleProductModule);
//# sourceMappingURL=sale_product.module.js.map