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
exports.ProductSizeService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("sequelize");
let ProductSizeService = class ProductSizeService {
    constructor(productsizeRepository) {
        this.productsizeRepository = productsizeRepository;
    }
    async create(data) {
        return await this.productsizeRepository.create({
            products_idproducts: data.products_idproducts,
            sizes_idsizes: data.sizes_idsizes,
            amount: data.amount
        });
    }
    async findAll() {
        return await this.productsizeRepository.findAll({
            where: {
                is_deleted: {
                    [sequelize_1.Op.ne]: 1
                }
            }
        });
    }
    async findOne(id) {
        const productsizeFound = await this.productsizeRepository.findOne({
            where: {
                idproduct_sizes: {
                    [sequelize_1.Op.eq]: id
                },
                is_deleted: {
                    [sequelize_1.Op.ne]: 1
                }
            }
        });
        if (!productsizeFound) {
            throw new common_1.NotFoundException("Tamaño de producto no encontrado");
        }
        return productsizeFound;
    }
    async update(id, data) {
        const [productsizeFound] = await this.productsizeRepository.update(data, {
            where: {
                idproduct_sizes: {
                    [sequelize_1.Op.eq]: id
                }
            }
        });
        if (productsizeFound === 0) {
            throw new common_1.NotFoundException("Tamaño de productos a actualizar no encontrado");
        }
        return { message: "Tamaño de productos actaulizado correctamente", status: 200, data };
    }
    async remove(id) {
        const [productsizeDelete] = await this.productsizeRepository.update({ is_deleted: 1 }, {
            where: {
                idproduct_sizes: {
                    [sequelize_1.Op.eq]: id
                }
            }
        });
        if (productsizeDelete === 0) {
            throw new common_1.NotFoundException("Tamaño de productos a eliminar no encontrado");
        }
        return { message: "Tamaño de productos eliminado correctamente", status: 200 };
    }
};
exports.ProductSizeService = ProductSizeService;
exports.ProductSizeService = ProductSizeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("PRODUCTSIZES_REPOSITORY")),
    __metadata("design:paramtypes", [Object])
], ProductSizeService);
//# sourceMappingURL=product_size.service.js.map