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
exports.PersonalDataService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("sequelize");
let PersonalDataService = class PersonalDataService {
    constructor(personaldataRepository, userRepository) {
        this.personaldataRepository = personaldataRepository;
        this.userRepository = userRepository;
    }
    async create(data) {
        const userExist = await this.userRepository.findByPk(data.user_iduser);
        if (!userExist) {
            throw new common_1.NotFoundException("El Usuario no existe");
        }
        return await this.personaldataRepository.create({
            user_iduser: data.user_iduser,
            name: data.name,
            lastname: data.lastname,
            bank_account: data.bank_account,
            phone: data.phone,
            address: data.address
        });
    }
    async findAll() {
        return await this.personaldataRepository.findAll({
            where: {
                is_deleted: {
                    [sequelize_1.Op.ne]: 1
                }
            }
        });
    }
    async findOne(id) {
        const personaldataFound = await this.personaldataRepository.findOne({
            where: {
                idpersonal_data: {
                    [sequelize_1.Op.eq]: id
                }
            }
        });
        if (!personaldataFound) {
            throw new common_1.NotFoundException("Datos personales no encontrado");
        }
        return personaldataFound;
    }
    async update(id, data) {
        if (data.user_iduser) {
            const userExist = await this.userRepository.findByPk(data.user_iduser);
            if (!userExist) {
                throw new common_1.NotFoundException("El usuario no existe");
            }
        }
        const [personaldataUpdate] = await this.personaldataRepository.update(data, {
            where: {
                idpersonal_data: {
                    [sequelize_1.Op.eq]: id
                }
            }
        });
        if (personaldataUpdate === 0) {
            throw new common_1.NotFoundException("Datos personales a actualizar no encontrado");
        }
        return { message: "Datos personales actualizado correctamente", status: 200, data };
    }
    async remove(id) {
        const [personaldataDelete] = await this.personaldataRepository.update({ is_deleted: 1 }, {
            where: {
                idpersonal_data: {
                    [sequelize_1.Op.eq]: id
                },
                is_deleted: {
                    [sequelize_1.Op.ne]: 1
                }
            }
        });
        if (personaldataDelete === 0) {
            throw new common_1.NotFoundException("Datos personales a eliminar no encontrado");
        }
        return { message: "Datos personales eliminado correctamente", status: 200 };
    }
};
exports.PersonalDataService = PersonalDataService;
exports.PersonalDataService = PersonalDataService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("PERSONAL_DATAS_REPOSITORY")),
    __param(1, (0, common_1.Inject)("USERS_REPOSITORY")),
    __metadata("design:paramtypes", [Object, Object])
], PersonalDataService);
//# sourceMappingURL=personal_data.service.js.map