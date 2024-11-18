"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenProvider = void 0;
const token_entity_1 = require("../entity/token.entity");
exports.tokenProvider = [
    {
        provide: "TOKEN_REPOSITORY",
        useValue: token_entity_1.ResetToken
    }
];
//# sourceMappingURL=token.provider.js.map