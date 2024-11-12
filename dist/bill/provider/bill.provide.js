"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.billProvider = void 0;
const bill_entity_1 = require("../entities/bill.entity");
exports.billProvider = [
    {
        provide: "BILLS_REPOSITORY",
        useValue: bill_entity_1.Bill
    }
];
//# sourceMappingURL=bill.provide.js.map