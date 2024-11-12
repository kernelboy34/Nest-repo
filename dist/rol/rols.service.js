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
exports.RolsService = void 0;
const common_1 = require("@nestjs/common");
;
const sequelize_1 = require("sequelize");
let RolsService = class RolsService {
    constructor(rolRepository) {
        this.rolRepository = rolRepository;
    }
    async create(data) {
        return await this.rolRepository.create({
            name: data.name,
            is_deleted: data.is_deleted
        });
    }
    async findOne(id) {
        const userFound = await this.rolRepository.findOne({
            where: {
                idroles: {
                    [sequelize_1.Op.eq]: id
                }
            }
        });
        if (!userFound) {
            throw new common_1.NotFoundException("Usuario no encontrado");
        }
        return userFound;
    }
    async findAll() {
        return this.rolRepository.findAll({
            where: {
                is_deleted: {
                    [sequelize_1.Op.ne]: 1
                }
            }
        });
    }
    async updateOne(data, id) {
        const [userUpdated] = await this.rolRepository.update(data, {
            where: {
                idroles: {
                    [sequelize_1.Op.eq]: id
                },
            }
        });
        if (userUpdated === 0) {
            throw new common_1.NotFoundException("Rol a actualizar no encontrado");
        }
        return { message: "Rol actualizado correctamente", status: 200, data };
    }
    async deleteOne(id) {
        const [userDeleted] = await this.rolRepository.update({ is_deleted: 1 }, {
            where: {
                idroles: {
                    [sequelize_1.Op.eq]: id
                },
                is_deleted: {
                    [sequelize_1.Op.ne]: 1
                }
            }
        });
        if (userDeleted === 0) {
            throw new common_1.NotFoundException("Rol a eliminar no encontrado");
        }
        return { message: "Rol eliminado correctamente", status: 200 };
    }
};
exports.RolsService = RolsService;
exports.RolsService = RolsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("ROLS_REPOSITORY")),
    __metadata("design:paramtypes", [Object])
], RolsService);
//# sourceMappingURL=rols.service.js.map