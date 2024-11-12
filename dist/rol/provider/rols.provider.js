"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rolProvider = void 0;
const rol_entity_1 = require("../entity/rol.entity");
exports.rolProvider = [
    {
        provide: "ROLS_REPOSITORY",
        useValue: rol_entity_1.Rol
    }
];
//# sourceMappingURL=rols.provider.js.map