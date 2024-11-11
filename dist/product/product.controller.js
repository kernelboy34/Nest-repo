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
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const product_service_1 = require("./product.service");
const create_product_dto_1 = require("./dto/create-product.dto");
const update_product_dto_1 = require("./dto/update-product.dto");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const uuid_1 = require("uuid");
const path = require("path");
const fs = require("fs");
const swagger_1 = require("@nestjs/swagger");
const rols_guard_1 = require("../rol/rols.guard");
const rol_decorator_1 = require("../rol/decorators/rol.decorator");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    create(file, createProductDto) {
        if (file) {
            createProductDto.imageUrl = file.path;
        }
        return this.productService.create(createProductDto);
    }
    findAll() {
        return this.productService.findAll();
    }
    findOne(id) {
        return this.productService.findOne(+id);
    }
    paginateProduct(take, skip) {
        return this.productService.paginateProducts(take, skip);
    }
    async fetchByIdWithImage(id, res) {
        const product = await this.productService.findOne(+id);
        if (!product) {
            throw new common_1.NotFoundException("Producto no encontrado");
        }
        const imagePath = path.join(__dirname, '..', '..', product.imageUrl);
        console.log(imagePath);
        if (!fs.existsSync(imagePath)) {
            return res.status(404).send('Imagen no encontrada');
        }
        const image = fs.readFileSync(imagePath);
        res.json({
            product,
            image: `data:image/jpeg;base64,${image.toString('base64')}`,
        });
    }
    update(id, updateProductDto) {
        return this.productService.update(+id, updateProductDto);
    }
    remove(id) {
        return this.productService.remove(+id);
    }
};
exports.ProductController = ProductController;
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true, transform: true })),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: (req, file, cb) => {
                const fileName = `${(0, uuid_1.v4)()}${path.extname(file.originalname)}`;
                try {
                    cb(null, fileName);
                }
                catch (error) {
                    console.log(error);
                }
            },
        }),
    })),
    (0, common_1.UseGuards)(rols_guard_1.RolesGuard),
    (0, common_1.Post)('create'),
    (0, swagger_1.ApiOperation)({ summary: "Crear un nuevo producto" }),
    (0, rol_decorator_1.Roles)('Administrador'),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_product_dto_1.CreateProductDto]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "create", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true, whitelist: true, transformOptions: { enableImplicitConversion: true }, })),
    (0, common_1.UseGuards)(rols_guard_1.RolesGuard),
    (0, common_1.Get)('findAll'),
    (0, swagger_1.ApiOperation)({ summary: "Listar un nuevo producto" }),
    (0, rol_decorator_1.Roles)('Administrador', 'Usuario'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "findAll", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true })),
    (0, common_1.UseGuards)(rols_guard_1.RolesGuard),
    (0, common_1.Get)('findOne/:id'),
    (0, swagger_1.ApiOperation)({ summary: "Listar un producto segun el id" }),
    (0, rol_decorator_1.Roles)('Administrador', 'Usuario'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "findOne", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true, transform: true })),
    (0, common_1.Get)('paginate/:tomar/:saltar'),
    (0, swagger_1.ApiOperation)({ summary: "Paginar productos" }),
    __param(0, (0, common_1.Param)('tomar')),
    __param(1, (0, common_1.Param)('saltar')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "paginateProduct", null);
__decorate([
    (0, common_1.UseGuards)(rols_guard_1.RolesGuard),
    (0, common_1.Get)('fetchByIdWithImage/:id'),
    (0, rol_decorator_1.Roles)('Administrador'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "fetchByIdWithImage", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true, transform: true })),
    (0, common_1.UseGuards)(rols_guard_1.RolesGuard),
    (0, common_1.Patch)('updateOne/:id'),
    (0, swagger_1.ApiOperation)({ summary: "Actualizar un producto segun el id" }),
    (0, rol_decorator_1.Roles)('Administrador'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_product_dto_1.UpdateProductDto]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "update", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true, transform: true })),
    (0, common_1.UseGuards)(rols_guard_1.RolesGuard),
    (0, common_1.Delete)('deleteOne/:id'),
    (0, swagger_1.ApiOperation)({ summary: "Eliminar un producto segun el id" }),
    (0, rol_decorator_1.Roles)('Administrador'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "remove", null);
exports.ProductController = ProductController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('product'),
    (0, swagger_1.ApiTags)("Productos"),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
//# sourceMappingURL=product.controller.js.map