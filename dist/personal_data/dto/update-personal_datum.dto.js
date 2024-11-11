"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePersonalDatumDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_personal_datum_dto_1 = require("./create-personal_datum.dto");
class UpdatePersonalDatumDto extends (0, mapped_types_1.PartialType)(create_personal_datum_dto_1.CreatePersonalDatumDto) {
}
exports.UpdatePersonalDatumDto = UpdatePersonalDatumDto;
//# sourceMappingURL=update-personal_datum.dto.js.map