"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatosGeoc = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const datos_geoc_controller_1 = require("./datos-geoc.controller");
const datos_geoc_schema_1 = require("./schemas/datos-geoc.schema");
let DatosGeoc = class DatosGeoc {
};
exports.DatosGeoc = DatosGeoc;
exports.DatosGeoc = DatosGeoc = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'DatosGeoc', schema: datos_geoc_schema_1.DatosGeocSchema }]),
        ],
        controllers: [datos_geoc_controller_1.DatosGeocController],
    })
], DatosGeoc);
//# sourceMappingURL=datos-geoc.module.js.map