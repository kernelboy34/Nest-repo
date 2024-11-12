"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockModule = void 0;
const common_1 = require("@nestjs/common");
const stock_service_1 = require("./stock.service");
const stock_controller_1 = require("./stock.controller");
const rols_guard_1 = require("../rol/rols.guard");
const sequelize_1 = require("@nestjs/sequelize");
const stock_entity_1 = require("./entities/stock.entity");
const sequelize_provider_1 = require("../sequelize/sequelize.provider");
const stock_provider_1 = require("./provider/stock.provider");
const rols_module_1 = require("../rol/rols.module");
let StockModule = class StockModule {
};
exports.StockModule = StockModule;
exports.StockModule = StockModule = __decorate([
    (0, common_1.Module)({
        controllers: [stock_controller_1.StockController],
        providers: [stock_service_1.StockService, rols_guard_1.RolesGuard, ...stock_provider_1.stockProvider],
        imports: [sequelize_1.SequelizeModule.forFeature([stock_entity_1.Stock]), sequelize_provider_1.SequelizeProvider, rols_module_1.RolsModule]
    })
], StockModule);
//# sourceMappingURL=stock.module.js.map