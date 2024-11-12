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
exports.SizeService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("sequelize");
let SizeService = class SizeService {
    constructor(sizeRepository) {
        this.sizeRepository = sizeRepository;
    }
    async create(data) {
        return await this.sizeRepository.create({
            name: data.name
        });
    }
    async findAll() {
        return await this.sizeRepository.findAll({
            where: {
                is_deleted: {
                    [sequelize_1.Op.ne]: 1
                }
            }
        });
    }
    async findOne(id) {
        const sizeFound = await this.sizeRepository.findOne({
            where: {
                idsizes: {
                    [sequelize_1.Op.eq]: id
                },
                is_deleted: {
                    [sequelize_1.Op.ne]: 1
                }
            }
        });
        if (!sizeFound) {
            throw new common_1.NotFoundException("Tamaño no encontrado o fue eliminado");
        }
        return sizeFound;
    }
    async update(id, data) {
        const [sizeUpdate] = await this.sizeRepository.update(data, {
            where: {
                idsizes: {
                    [sequelize_1.Op.eq]: id
                }
            }
        });
        if (sizeUpdate === 0) {
            throw new common_1.NotFoundException("Tamaño no encontrado o fue eliminado");
        }
        return { message: "Tamaño actualizado correctamente", status: 200, data: data };
    }
    async delete(id) {
        const [sizeDeleted] = await this.sizeRepository.update({ is_deleted: 1 }, {
            where: {
                idsizes: {
                    [sequelize_1.Op.eq]: id
                },
                is_deleted: {
                    [sequelize_1.Op.ne]: 1
                }
            }
        });
        if (sizeDeleted === 0) {
            throw new common_1.NotFoundException("No se puede eliminar el tamaño porque no fue encontrado o fue eliminado");
        }
        return { message: "Tamaño eliminado correctamente", status: 200 };
    }
};
exports.SizeService = SizeService;
exports.SizeService = SizeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("SIZES_REPOSITORY")),
    __metadata("design:paramtypes", [Object])
], SizeService);
//# sourceMappingURL=size.service.js.map