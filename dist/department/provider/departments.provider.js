"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.departmentsProvider = void 0;
const department_entity_1 = require("../entities/department.entity");
exports.departmentsProvider = [
    {
        provide: "DEPARTMENTS_REPOSITORY",
        useValue: department_entity_1.Department
    }
];
//# sourceMappingURL=departments.provider.js.map