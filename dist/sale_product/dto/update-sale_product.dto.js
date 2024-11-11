"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSaleProductDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_sale_product_dto_1 = require("./create-sale_product.dto");
class UpdateSaleProductDto extends (0, mapped_types_1.PartialType)(create_sale_product_dto_1.CreateSaleProductDto) {
}
exports.UpdateSaleProductDto = UpdateSaleProductDto;
//# sourceMappingURL=update-sale_product.dto.js.map