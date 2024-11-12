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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const VerifyEmails_constant_1 = require("../constants/VerifyEmails.constant");
const bt = require("bcrypt");
const config_1 = require("../config/config");
const sequelize_1 = require("sequelize");
const rol_entity_1 = require("../rol/entity/rol.entity");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
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
        data.password = await bt.hash(data.password, config_1.config.salt);
        return await this.userRepository.create({
            name: data.name,
            email: data.email,
            password: data.password,
            rols_idrols: data.rols_idrols
        });
    }
    async findOne(email) {
        const UserFound = await this.userRepository.findOne({
            where: {
                email: email
            },
        });
        if (!UserFound) {
            throw new common_1.NotFoundException("Usuario no encontrado");
        }
        return await UserFound;
    }
    async findAll() {
        return await this.userRepository.findAll();
    }
    async findUserRole(userId) {
        return await this.userRepository.findOne({
            where: {
                iduser: {
                    [sequelize_1.Op.eq]: userId
                }
            },
            include: [{ model: rol_entity_1.Rol }]
        });
    }
    async findOneToLogin(email) {
        const userFound = await this.userRepository.findOne({
            where: {
                email: {
                    [sequelize_1.Op.eq]: email
                },
                is_deleted: {
                    [sequelize_1.Op.ne]: 1
                }
            },
        });
        if (!userFound) {
            throw new common_1.NotFoundException("Usuario no encontrado");
        }
        return await userFound;
    }
    async update(data, id) {
        const [userUpdate] = await this.userRepository.update(data, {
            where: {
                iduser: {
                    [sequelize_1.Op.eq]: id
                }
            }
        });
        if (userUpdate === 0) {
            throw new common_1.NotFoundException("Usuario a actualizar no fue encontrado");
        }
        return { message: "Usuario actualizado correctamente", status: 200, data };
    }
    async delete(id) {
        const [userDelete] = await this.userRepository.update({ is_deleted: 1 }, {
            where: {
                iduser: id,
                is_deleted: {
                    [sequelize_1.Op.ne]: 1
                }
            }
        });
        if (userDelete === 0) {
            throw new common_1.NotFoundException("Usuario eliminado o fue eliminado");
        }
        return { message: "Usuario eliminado correctamente", status: 200 };
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('USERS_REPOSITORY')),
    __metadata("design:paramtypes", [Object])
], UserService);
//# sourceMappingURL=user.service.js.map