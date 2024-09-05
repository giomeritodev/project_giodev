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
exports.ItensSaleService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let ItensSaleService = class ItensSaleService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async addItensSale({ saleId, productId, amount, discount }) {
        return await this.prisma.itemSale.create({
            data: {
                saleId,
                productId,
                amount,
                discount,
            }
        });
    }
    async findAllItensBySale(saleId) {
        return await this.prisma.itemSale.findMany({
            where: {
                saleId
            },
            select: {
                id: true,
                saleId: true,
                sale: true,
                productId: true,
                product: true,
                amount: true,
                discount: true,
            }
        });
    }
};
exports.ItensSaleService = ItensSaleService;
exports.ItensSaleService = ItensSaleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ItensSaleService);
//# sourceMappingURL=itens-sale.service.js.map