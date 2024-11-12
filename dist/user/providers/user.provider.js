"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersProvider = void 0;
const user_entity_1 = require("../entity/user.entity");
exports.usersProvider = [
    {
        provide: "USERS_REPOSITORY",
        useValue: user_entity_1.User
    }
];
//# sourceMappingURL=user.provider.js.map