"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stockProvider = void 0;
const stock_entity_1 = require("../entities/stock.entity");
exports.stockProvider = [
    {
        provide: "STOCKS_REPOSITORY",
        useValue: stock_entity_1.Stock
    }
];
//# sourceMappingURL=stock.provider.js.map