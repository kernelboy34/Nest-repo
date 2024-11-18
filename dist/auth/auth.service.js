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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const user_service_1 = require("../user/user.service");
const bcrypt = require("bcrypt");
const sequelize_1 = require("sequelize");
const config_1 = require("../config/config");
const schedule_1 = require("@nestjs/schedule");
let AuthService = class AuthService {
    constructor(userService, jwtService, tokenRepository) {
        this.userService = userService;
        this.jwtService = jwtService;
        this.tokenRepository = tokenRepository;
    }
    async signIn(data) {
        const user = await this.userService.findOneToLogin(data.email);
        const password = user.password.toString();
        if (!(await bcrypt.compare(data.pass, password))) {
            throw new common_1.UnauthorizedException("Autorizacion denegada, revise las credenciales");
        }
        const userRole = await this.userService.findUserRole(user.iduser);
        if (!userRole) {
            throw new common_1.UnauthorizedException("El usuario no tiene un rol asignado");
        }
        const payload = { sub: user.iduser, email: user.email, rol: userRole.role.name };
        return {
            access_token: await this.jwtService.signAsync(payload)
        };
    }
    async forgotPassword(email) {
        const user = await this.userService.findOne(email.email);
        if (!user) {
            throw new common_1.NotFoundException("Usuario no encontrado");
        }
        const payload = { sub: user.iduser, email: user.email };
        const resetToken = await this.jwtService.signAsync(payload, { expiresIn: '15m' });
        const expiresAt = new Date(Date.now() + 15 * 60 * 1000);
        await this.tokenRepository.create({
            user_iduser: user.iduser,
            token: resetToken,
            expiresAt,
        });
        return { message: "Token de recuperacion creado", resetToken };
    }
    async resetPassword(data) {
        const tokenRecord = await this.tokenRepository.findOne({
            where: {
                token: {
                    [sequelize_1.Op.eq]: data.token
                },
                expiresAt: {
                    [sequelize_1.Op.gt]: new Date()
                }
            }
        });
        if (!tokenRecord) {
            throw new common_1.NotFoundException("Token no existente o expiro");
        }
        if (data.password.length < 7) {
            throw new common_1.UnauthorizedException("La nueva contraseña es muy corta");
        }
        console.log(tokenRecord.user_iduser);
        const user = await this.userService.findById(tokenRecord.user_iduser);
        const hashPassword = await bcrypt.hash(data.password, config_1.config.salt);
        await this.userService.updatePassword(hashPassword, user.iduser);
        await this.tokenRepository.destroy({
            where: {
                token: {
                    [sequelize_1.Op.eq]: data.token
                }
            }
        });
        return { message: "Contraseña reestablecida con exito" };
    }
    async removeExpiredTokens() {
        const deletedTokens = await this.tokenRepository.destroy({
            where: {
                expiresAt: {
                    [sequelize_1.Op.lt]: new Date()
                }
            }
        });
        console.log("Cleaning Tokens");
    }
};
exports.AuthService = AuthService;
__decorate([
    (0, schedule_1.Cron)("* */15 * * *"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthService.prototype, "removeExpiredTokens", null);
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, common_1.Inject)("TOKEN_REPOSITORY")),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService, Object])
], AuthService);
//# sourceMappingURL=auth.service.js.map