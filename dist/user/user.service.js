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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma_service_1 = require("../prisma/prisma.service");
const VerifyEmails_constant_1 = require("../constants/VerifyEmails.constant");
const library_1 = require("@prisma/client/runtime/library");
const bt = require("bcrypt");
const config_1 = require("../config/config");
let UserService = class UserService {
    constructor(db) {
        this.db = db;
    }
    async create(data) {
        let ValidEmail = false;
        VerifyEmails_constant_1.email.forEach(emails => {
            if (data.email.endsWith(emails)) {
                ValidEmail = true;
            }
        });
        if (!ValidEmail) {
            throw new common_1.UnauthorizedException("Dominio de correo no permitido");
        }
        try {
            data.password = await bt.hash(data.password, config_1.config.salt);
            return await this.db.user.create({
                data
            });
        }
        catch (error) {
            console.log(error);
            if (error instanceof client_1.Prisma.PrismaClientKnownRequestError) {
                if (error.code === "p2002") {
                    throw new common_1.ConflictException("El correo ya esta en uso");
                }
                if (error.code === "P2003") {
                    throw new common_1.ConflictException("Rol no permitido");
                }
            }
        }
    }
    async findOne(email) {
        const UserFound = await this.db.user.findUnique({
            where: {
                email: email
            },
            select: {
                iduser: true,
                rols_idrols: true,
                name: true,
                email: true,
                is_deleted: true,
            }
        });
        if (!UserFound) {
            throw new common_1.NotFoundException("Usuario no encontrado");
        }
        return await UserFound;
    }
    async findAll() {
        return await this.db.user.findMany({
            select: {
                iduser: true,
                rols_idrols: true,
                name: true,
                email: true,
                is_deleted: true,
                rols: true
            }
        });
    }
    async findUserRole(userId) {
        return this.db.rols.findFirst({
            where: { user: { some: { iduser: userId } } }
        });
    }
    async findOneToLogin(email) {
        const userFound = await this.db.user.findUnique({
            where: {
                email: email
            }
        });
        if (!userFound) {
            throw new common_1.NotFoundException("Usuario no encontrado");
        }
        return await userFound;
    }
    async update(data, id) {
        try {
            return await this.db.user.update({
                where: {
                    iduser: id,
                },
                data: {
                    ...data
                }
            });
        }
        catch (error) {
            if (error instanceof library_1.PrismaClientKnownRequestError) {
                if (error.code == 'P2025') {
                    throw new common_1.NotFoundException("Usuario a actualizar no encontrada");
                }
            }
        }
    }
    async delete(id) {
        try {
            return await this.db.user.update({
                where: {
                    iduser: id,
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
            if (error instanceof library_1.PrismaClientKnownRequestError) {
                if (error.code == "P2025") {
                    throw new common_1.NotFoundException("Usuario no encontrado o fue eliminado");
                }
            }
        }
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
//# sourceMappingURL=user.service.js.map