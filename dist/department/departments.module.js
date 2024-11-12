"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentsModule = void 0;
const common_1 = require("@nestjs/common");
const departments_service_1 = require("./departments.service");
const departments_controller_1 = require("./departments.controller");
const departments_provider_1 = require("./provider/departments.provider");
const sequelize_1 = require("@nestjs/sequelize");
const department_entity_1 = require("./entities/department.entity");
const sequelize_provider_1 = require("../sequelize/sequelize.provider");
const rols_module_1 = require("../rol/rols.module");
let DepartmentsModule = class DepartmentsModule {
};
exports.DepartmentsModule = DepartmentsModule;
exports.DepartmentsModule = DepartmentsModule = __decorate([
    (0, common_1.Module)({
        controllers: [departments_controller_1.DepartmentsController],
        providers: [departments_service_1.DepartmentsService, ...departments_provider_1.departmentsProvider],
        imports: [sequelize_1.SequelizeModule.forFeature([department_entity_1.Department]), sequelize_provider_1.SequelizeProvider, rols_module_1.RolsModule],
        exports: [departments_service_1.DepartmentsService]
    })
], DepartmentsModule);
//# sourceMappingURL=departments.module.js.map