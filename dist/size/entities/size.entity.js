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
exports.Size = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const product_size_entity_1 = require("../../product_size/entities/product_size.entity");
let Size = class Size extends sequelize_typescript_1.Model {
};
exports.Size = Size;
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER),
    __metadata("design:type", Number)
], Size.prototype, "idsizes", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(45),
        allowNull: true,
    }),
    __metadata("design:type", String)
], Size.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TINYINT,
        allowNull: true,
        defaultValue: 0,
    }),
    __metadata("design:type", Number)
], Size.prototype, "is_deleted", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => product_size_entity_1.ProductSize),
    __metadata("design:type", Array)
], Size.prototype, "productSizes", void 0);
exports.Size = Size = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'tamanos',
        timestamps: false,
    })
], Size);
//# sourceMappingURL=size.entity.js.map