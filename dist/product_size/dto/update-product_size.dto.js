"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductSizeDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_product_size_dto_1 = require("./create-product_size.dto");
class UpdateProductSizeDto extends (0, mapped_types_1.PartialType)(create_product_size_dto_1.CreateProductSizeDto) {
}
exports.UpdateProductSizeDto = UpdateProductSizeDto;
//# sourceMappingURL=update-product_size.dto.js.map