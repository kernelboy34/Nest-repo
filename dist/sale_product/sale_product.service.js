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
exports.SaleProductService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("sequelize");
let SaleProductService = class SaleProductService {
    constructor(saleproductsRepository, saleRepository, productRepository) {
        this.saleproductsRepository = saleproductsRepository;
        this.saleRepository = saleRepository;
        this.productRepository = productRepository;
    }
    async create(data) {
        const saleExist = await this.saleRepository.findByPk(data.sales_idsales);
        if (!saleExist) {
            throw new common_1.NotFoundException("La venta no existe");
        }
        const productExist = await this.productRepository.findByPk(data.products_idproducts);
        if (!productExist) {
            throw new common_1.NotFoundException("El producto no existe");
        }
        return await this.saleproductsRepository.create({
            sales_idsales: data.sales_idsales,
            products_idproducts: data.products_idproducts,
            quantity: data.quantity,
            total_price: data.total_price
        });
    }
    async findAll() {
        return await this.saleproductsRepository.findAll({
            where: {
                is_deleted: {
                    [sequelize_1.Op.ne]: 1
                }
            }
        });
    }
    async findOne(id) {
        const saleproductFound = await this.saleproductsRepository.findOne({
            where: {
                idsale_products: {
                    [sequelize_1.Op.eq]: id
                },
                is_deleted: {
                    [sequelize_1.Op.ne]: 1
                }
            }
        });
        if (!saleproductFound) {
            throw new common_1.NotFoundException("Venta de producto no encontrado o fue eliminado");
        }
        return saleproductFound;
    }
    async update(id, data) {
        if (data.products_idproducts) {
            const productExist = await this.productRepository.findByPk(data.products_idproducts);
            if (!productExist) {
                throw new common_1.NotFoundException("El producto no existe");
            }
        }
        if (data.sales_idsales) {
            const saleExist = await this.saleRepository.findByPk(data.sales_idsales);
            if (!saleExist) {
                throw new common_1.NotFoundException("La venta no existe");
            }
        }
        const [saleproductsUpdate] = await this.saleproductsRepository.update(data, {
            where: {
                idsale_products: {
                    [sequelize_1.Op.eq]: id
                }
            }
        });
        if (saleproductsUpdate === 0) {
            throw new common_1.NotFoundException("Venta de productos a actualizar no encontrada");
        }
        return { message: "Venta de productos actualizado correctamente", status: 200, data };
    }
    async remove(id) {
        const [saleproductsDelete] = await this.saleproductsRepository.update({ is_deleted: 1 }, {
            where: {
                idsale_products: {
                    [sequelize_1.Op.eq]: id
                },
                is_deleted: {
                    [sequelize_1.Op.ne]: 1
                }
            }
        });
        if (saleproductsDelete === 0) {
            throw new common_1.NotFoundException("Venta de productos no encontrado o fue eliminado");
        }
        return { message: "Venta de productos eliminado correctamente", status: 200 };
    }
};
exports.SaleProductService = SaleProductService;
exports.SaleProductService = SaleProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("SALE_PRODUCTS_REPOSITORY")),
    __param(1, (0, common_1.Inject)("SALES_REPOSITORY")),
    __param(2, (0, common_1.Inject)("PRODUCTS_REPOSITORY")),
    __metadata("design:paramtypes", [Object, Object, Object])
], SaleProductService);
//# sourceMappingURL=sale_product.service.js.map