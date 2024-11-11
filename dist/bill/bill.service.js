"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const library_1 = require("@prisma/client/runtime/library");
let BillService = class BillService {
    constructor(db) {
        this.db = db;
    }
    async create(data) {
        return await this.db.bills.create({
            data
        });
    }
    async findAll() {
        return await this.db.bills.findMany({
            select: {
                idbills: true,
                is_deleted: true,
                total_price: true,
                sales_idsales: true,
                sales: true,
            }
        });
    }
    async findOne(id) {
        const billFound = await this.db.bills.findUnique({
            where: {
                idbills: id
            }
        });
        if (!billFound) {
            throw new common_1.NotFoundException("Factura no encontrada");
        }
        return billFound;
    }
    async update(id, data) {
        try {
            return await this.db.bills.update({
                where: {
                    idbills: id,
                },
                data
            });
        }
        catch (error) {
            if (error instanceof library_1.PrismaClientKnownRequestError) {
                if (error.code == 'P2025') {
                    throw new common_1.NotFoundException("Factura no encontrada");
                }
            }
        }
    }
    async remove(id) {
        try {
            return await this.db.bills.update({
                where: {
                    idbills: id,
                    NOT: {
                        is_deleted: 1
                    }
                },
                data: {
                    is_deleted: 1
                }
            });
        }
        catch (error) {
            if (error instanceof library_1.PrismaClientKnownRequestError) {
                if (error.code == 'P2025') {
                    throw new common_1.NotFoundException("Factura no encontrada o fue eliminada");
                }
            }
        }
    }
};
exports.BillService = BillService;
exports.BillService = BillService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BillService);
//# sourceMappingURL=bill.service.js.map