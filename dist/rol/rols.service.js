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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const library_1 = require("@prisma/client/runtime/library");
let RolsService = class RolsService {
    constructor(db) {
        this.db = db;
    }
    async create(data) {
        return await this.db.rols.create({
            data
        });
    }
    async findOne(id) {
        const rolsFound = await this.db.rols.findUnique({
            where: {
                idrols: id
            }
        });
        if (!rolsFound) {
            throw new common_1.NotFoundException("Rol no encontrado");
        }
        return rolsFound;
    }
    async findAll() {
        return await this.db.rols.findMany();
    }
    async updateOne(data, id) {
        try {
            return await this.db.rols.update({
                where: {
                    idrols: id,
                },
                data
            });
        }
        catch (error) {
            if (error instanceof library_1.PrismaClientKnownRequestError) {
                if (error.code == 'P2025') {
                    throw new common_1.NotFoundException("Rol no encontrado");
                }
            }
        }
    }
    async deleteOne(id) {
        try {
            return await this.db.rols.update({
                where: {
                    idrols: id,
                    NOT: {
                        is_deleted: 1
                    }
                },
                data: {
                    is_deleted: 1
                }
            });
        }
        catch (error) {
            console.log(error);
            if (error instanceof library_1.PrismaClientKnownRequestError) {
                if (error.code == 'P2025') {
                    throw new common_1.NotFoundException("Rol no encontrado o fue eliminado");
                }
            }
        }
    }
};
exports.RolsService = RolsService;
exports.RolsService = RolsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RolsService);
//# sourceMappingURL=rols.service.js.map