"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saleproductProvider = void 0;
const sale_product_entity_1 = require("../entities/sale_product.entity");
exports.saleproductProvider = [
    {
        provide: "SALE_PRODUCTS_REPOSITORY",
        useValue: sale_product_entity_1.SaleProduct
    }
];
//# sourceMappingURL=sale_product.provide.js.map