"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sizeProvider = void 0;
const size_entity_1 = require("../entities/size.entity");
exports.sizeProvider = [
    {
        provide: "SIZES_REPOSITORY",
        useValue: size_entity_1.Size
    }
];
//# sourceMappingURL=size.provider.js.map