"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.personaldatasProvider = void 0;
const personal_datum_entity_1 = require("../entities/personal_datum.entity");
exports.personaldatasProvider = [
    {
        provide: "PERSONAL_DATAS_REPOSITORY",
        useValue: personal_datum_entity_1.PersonalDatum
    }
];
//# sourceMappingURL=personal_data.provider.js.map