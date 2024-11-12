"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequelizeProvider = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const bill_entity_1 = require("../bill/entities/bill.entity");
const config_1 = require("../config/config");
const department_entity_1 = require("../department/entities/department.entity");
const personal_datum_entity_1 = require("../personal_data/entities/personal_datum.entity");
const product_entity_1 = require("../product/entities/product.entity");
const product_size_entity_1 = require("../product_size/entities/product_size.entity");
const rol_entity_1 = require("../rol/entity/rol.entity");
const sale_entity_1 = require("../sale/entities/sale.entity");
const sale_product_entity_1 = require("../sale_product/entities/sale_product.entity");
const size_entity_1 = require("../size/entities/size.entity");
const stock_entity_1 = require("../stock/entities/stock.entity");
const user_entity_1 = require("../user/entity/user.entity");
let SequelizeProvider = class SequelizeProvider {
};
exports.SequelizeProvider = SequelizeProvider;
exports.SequelizeProvider = SequelizeProvider = __decorate([
    (0, common_1.Module)({
        imports: [
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'mysql',
                host: config_1.config.db_host,
                port: config_1.config.db_port,
                username: config_1.config.db_user,
                password: config_1.config.db_pass,
                database: config_1.config.db_database,
                models: [user_entity_1.User, rol_entity_1.Rol, size_entity_1.Size, product_entity_1.Product, personal_datum_entity_1.PersonalDatum, stock_entity_1.Stock, department_entity_1.Department, sale_entity_1.Sale, bill_entity_1.Bill, sale_product_entity_1.SaleProduct, product_size_entity_1.ProductSize],
                autoLoadModels: true,
                synchronize: true
            })
        ],
        exports: [sequelize_1.SequelizeModule]
    })
], SequelizeProvider);
//# sourceMappingURL=sequelize.provider.js.map