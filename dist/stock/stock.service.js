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
exports.StockService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("sequelize");
let StockService = class StockService {
    constructor(stockRepository) {
        this.stockRepository = stockRepository;
    }
    async create(data) {
        return await this.stockRepository.create({
            branches_idbranches: data.branches_idbranches,
            products_idproducts: data.products_idproducts,
            quantity: data.quantity
        });
    }
    async findAll() {
        return await this.stockRepository.findAll({
            where: {
                is_deleted: {
                    [sequelize_1.Op.ne]: 1
                }
            }
        });
    }
    async findOne(id) {
        const stockFound = await this.stockRepository.findOne({
            where: {
                idstocks: {
                    [sequelize_1.Op.eq]: id
                },
                is_deleted: {
                    [sequelize_1.Op.ne]: 1
                }
            }
        });
        if (!stockFound) {
            throw new common_1.NotFoundException("Existencia no encontrada");
        }
        return stockFound;
    }
    async update(id, data) {
        const [stockUpdate] = await this.stockRepository.update(data, {
            where: {
                idstocks: {
                    [sequelize_1.Op.eq]: id
                }
            }
        });
        if (stockUpdate === 0) {
            throw new common_1.NotFoundException("Existencia no encontrada o fue eliminada");
        }
        return { message: "Existencia actualizado correctamente", status: 200, data: data };
    }
    async remove(id) {
        const [stockDelete] = await this.stockRepository.update({ is_deleted: 1 }, {
            where: {
                idstocks: {
                    [sequelize_1.Op.eq]: id
                },
                is_deleted: {
                    [sequelize_1.Op.ne]: 1
                }
            }
        });
        if (stockDelete === 0) {
            throw new common_1.NotFoundException("Existencia a eliminar no encontrada");
        }
        return { message: "Existencia eliminado correctamente", status: 200 };
    }
};
exports.StockService = StockService;
exports.StockService = StockService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("STOCKS_REPOSITORY")),
    __metadata("design:paramtypes", [Object])
], StockService);
//# sourceMappingURL=stock.service.js.map