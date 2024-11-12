"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const user_controller_1 = require("./user.controller");
const user_service_1 = require("./user.service");
const rols_guard_1 = require("../rol/rols.guard");
const user_provider_1 = require("./providers/user.provider");
const sequelize_1 = require("@nestjs/sequelize");
const user_entity_1 = require("./entity/user.entity");
const sequelize_provider_1 = require("../sequelize/sequelize.provider");
const rols_provider_1 = require("../rol/provider/rols.provider");
const rols_module_1 = require("../rol/rols.module");
let UserModule = class UserModule {
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        controllers: [user_controller_1.UserController],
        providers: [
            user_service_1.UserService,
            rols_guard_1.RolesGuard,
            ...user_provider_1.usersProvider,
            ...rols_provider_1.rolProvider
        ],
        exports: [user_service_1.UserService],
        imports: [sequelize_1.SequelizeModule.forFeature([user_entity_1.User]), sequelize_provider_1.SequelizeProvider, rols_module_1.RolsModule]
    })
], UserModule);
//# sourceMappingURL=user.module.js.map