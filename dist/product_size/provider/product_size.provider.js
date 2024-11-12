"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsizeProvider = void 0;
const product_size_entity_1 = require("../entities/product_size.entity");
exports.productsizeProvider = [
    {
        provide: "PRODUCTSIZES_REPOSITORY",
        useValue: product_size_entity_1.ProductSize
    }
];
//# sourceMappingURL=product_size.provider.js.map