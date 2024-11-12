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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const create_product_dto_1 = require("./dto/create-product.dto");
const update_product_dto_1 = require("./dto/update-product.dto");
const sequelize_1 = require("sequelize");
let ProductService = class ProductService {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async create(data) {
        return await this.productRepository.create({
            name: data.name,
            imageUrl: data.imageUrl,
            unitPrice: data.unitPrice
        });
    }
    async findAll() {
        return await this.productRepository.findAll({
            where: {
                is_deleted: {
                    [sequelize_1.Op.ne]: 1
                }
            }
        });
    }
    async findOne(id) {
        const productFound = await this.productRepository.findOne({
            where: {
                idproducts: {
                    [sequelize_1.Op.eq]: id
                },
                is_deleted: {
                    [sequelize_1.Op.ne]: 1
                }
            }
        });
        if (!productFound) {
            throw new common_1.NotFoundException("Producto no encontrado o fue eliminado");
        }
        return productFound;
    }
    async paginateProducts(take, skip) {
        return await this.productRepository.findAll({
            where: {
                is_deleted: {
                    [sequelize_1.Op.ne]: 1
                },
            },
            offset: skip,
            limit: take
        });
    }
    async update(id, data) {
        const [productUpdate] = await this.productRepository.update(data, {
            where: {
                idproducts: {
                    [sequelize_1.Op.eq]: id
                }
            }
        });
        if (productUpdate === 0) {
            throw new common_1.NotFoundException("Producto no encontrado");
        }
        return { message: "Producto actualizado correctamente", status: 200, data };
    }
    async remove(id) {
        const [productDelete] = await this.productRepository.update({ is_deleted: 1 }, {
            where: {
                idproducts: {
                    [sequelize_1.Op.eq]: id
                },
                is_deleted: {
                    [sequelize_1.Op.ne]: 1
                }
            }
        });
        if (productDelete === 0) {
            throw new common_1.NotFoundException("Producto no encontrado o fue eliminado");
        }
        return { message: "Producto eliminado correctamente", status: 200 };
    }
};
exports.ProductService = ProductService;
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true, transformOptions: { enableImplicitConversion: true } })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_dto_1.CreateProductDto]),
    __metadata("design:returntype", Promise)
], ProductService.prototype, "create", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true, transformOptions: { enableImplicitConversion: true } })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductService.prototype, "findAll", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true, transformOptions: { enableImplicitConversion: true } })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductService.prototype, "findOne", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true, transformOptions: { enableImplicitConversion: true } })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], ProductService.prototype, "paginateProducts", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true, transformOptions: { enableImplicitConversion: true } })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_product_dto_1.UpdateProductDto]),
    __metadata("design:returntype", Promise)
], ProductService.prototype, "update", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true, transformOptions: { enableImplicitConversion: true } })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductService.prototype, "remove", null);
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("PRODUCTS_REPOSITORY")),
    __metadata("design:paramtypes", [Object])
], ProductService);
//# sourceMappingURL=product.service.js.map