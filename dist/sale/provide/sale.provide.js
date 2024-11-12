"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saleProvider = void 0;
const sale_entity_1 = require("../entities/sale.entity");
exports.saleProvider = [
    {
        provide: "SALES_REPOSITORY",
        useValue: sale_entity_1.Sale
    }
];
//# sourceMappingURL=sale.provide.js.map