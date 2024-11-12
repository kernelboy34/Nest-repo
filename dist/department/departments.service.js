"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("sequelize");
let DepartmentsService = class DepartmentsService {
    constructor(deparmentRepository) {
        this.deparmentRepository = deparmentRepository;
    }
    async create(data) {
        return await this.deparmentRepository.create({
            name: data.name,
            address: data.address
        });
    }
    async findAll() {
        return await this.deparmentRepository.findAll({
            where: {
                is_deleted: {
                    [sequelize_1.Op.ne]: 1
                }
            }
        });
    }
    async findOne(id) {
        const departmentFound = await this.deparmentRepository.findOne({
            where: {
                iddepartments: {
                    [sequelize_1.Op.eq]: id
                }
            }
        });
        if (!departmentFound) {
            throw new common_1.NotFoundException("Departamento no encontrado");
        }
        return departmentFound;
    }
    async update(id, data) {
        const [departmentUpdate] = await this.deparmentRepository.update(data, {
            where: {
                iddepartments: {
                    [sequelize_1.Op.eq]: id
                }
            }
        });
        if (departmentUpdate === 0) {
            throw new common_1.NotFoundException("Departamento a actualizar no encontrado");
        }
        return { message: "Departamento actualizado correctamente", status: 200, data };
    }
    async delete(id) {
        const [departmentDelete] = await this.deparmentRepository.update({ is_deleted: 1 }, {
            where: {
                iddepartments: {
                    [sequelize_1.Op.eq]: id
                },
                is_deleted: {
                    [sequelize_1.Op.ne]: 1
                }
            }
        });
        if (departmentDelete === 0) {
            throw new common_1.NotFoundException("Departamento a eliminar no encontrado");
        }
        return { message: "Departamento eliminado correctamente", status: 200 };
    }
};
exports.DepartmentsService = DepartmentsService;
exports.DepartmentsService = DepartmentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("DEPARTMENTS_REPOSITORY")),
    __metadata("design:paramtypes", [Object])
], DepartmentsService);
//# sourceMappingURL=departments.service.js.map