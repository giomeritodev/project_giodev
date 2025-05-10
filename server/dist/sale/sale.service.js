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
exports.SaleService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let SaleService = class SaleService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findBySale(id) {
        return await this.prisma.sale.findFirst({
            where: { id },
            select: {
                id: true,
                dateSale: true,
                partnerId: true,
                typeSale: true,
                typePayment: true,
                statusId: true,
                statusPaymentId: true,
                statusPayment: {
                    select: {
                        id: true,
                        name: true,
                    }
                },
                partner: true,
            }
        });
    }
    async findAllSales(page, search) {
        const take = 5;
        const skip = (page - 1) * take;
        console.log(take, skip);
        const [sale, total] = await this.prisma.$transaction([
            this.prisma.sale.findMany({
                where: {
                    partner: {
                        name: { contains: search }
                    }
                },
                orderBy: {
                    id: 'desc'
                },
                select: {
                    id: true,
                    dateSale: true,
                    partnerId: true,
                    typeSale: true,
                    typePayment: true,
                    status: true,
                    statusPaymentId: true,
                    statusPayment: {
                        select: {
                            id: true,
                            name: true,
                        }
                    },
                    partner: {
                        select: {
                            id: true,
                            name: true,
                        }
                    },
                },
                take,
                skip
            }),
            this.prisma.sale.count(),
        ]);
        const totalPages = Math.ceil(total / take);
        return { total, totalPages, sale };
    }
    async createSale({ dateSale, partnerId, typeSale, typePayment, statusPaymentId, statusId }) {
        return await this.prisma.sale.create({
            data: {
                dateSale,
                partnerId,
                typeSale,
                typePayment,
                statusId,
                statusPaymentId,
            }
        });
    }
    async finaliseSale(id, sale) {
        let saleSelected = this.findBySale(id);
        return await this.prisma.sale.update({
            where: { id },
            data: {
                ...saleSelected,
                ...sale
            }
        });
    }
};
exports.SaleService = SaleService;
exports.SaleService = SaleService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SaleService);
//# sourceMappingURL=sale.service.js.map