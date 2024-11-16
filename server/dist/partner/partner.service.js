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
exports.PartnerService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PartnerService = class PartnerService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findByPartner(id) {
        return await this.prisma.partner.findFirst({
            where: {
                id
            },
            select: {
                id: true,
                name: true,
                cpfOrCnpj: true,
                typePartnerId: true,
                typePartner: true,
                fone: true,
                addresses: {
                    select: {
                        id: true,
                        public_place: true,
                        complement: true,
                        number_address: true,
                        cep: true,
                        city: {
                            select: {
                                id: true,
                                name: true,
                                state: true,
                            }
                        },
                        cityId: true,
                        partner: true,
                        sector: true,
                    }
                },
            },
        });
    }
    async findAllPartners() {
        return await this.prisma.partner.findMany({
            select: {
                id: true,
                name: true,
                cpfOrCnpj: true,
                typePartnerId: true,
                typePartner: true,
                fone: true,
            }
        });
    }
    async findAll(page, search) {
        const take = 5;
        const skip = (page - 1) * take;
        const [partner, total] = await this.prisma.$transaction([
            this.prisma.partner.findMany({
                where: {
                    name: {
                        contains: search
                    }
                },
                orderBy: {
                    id: "desc"
                },
                select: {
                    id: true,
                    name: true,
                    cpfOrCnpj: true,
                    fone: true,
                    typePartner: true,
                    entries: true,
                    sales: true,
                },
                take,
                skip,
            }),
            this.prisma.partner.count(),
        ]);
        const totalPages = Math.ceil(total / take);
        return {
            partner,
            total,
            totalPages
        };
    }
    async createPartner({ name, cpfOrCnpj, typePartnerId, fone }) {
        const partner = await this.prisma.partner.create({
            data: {
                name,
                cpfOrCnpj,
                typePartnerId,
                fone,
            },
            select: {
                id: true,
                name: true,
                cpfOrCnpj: true,
                typePartnerId: true,
                typePartner: true,
                fone: true,
                addresses: true,
            }
        });
        return partner;
    }
    async editPartner(id, { name, cpfOrCnpj, typePartnerId, fone }) {
        const part = this.findByPartner(id);
        if (!part) {
            console.log("Parceiro não existe");
            return;
        }
        return await this.prisma.partner.update({
            where: {
                id
            },
            data: {
                name,
                cpfOrCnpj,
                typePartnerId,
                fone
            }
        });
    }
    async deletePartner(id) {
        return await this.prisma.partner.delete({ where: { id } });
    }
};
exports.PartnerService = PartnerService;
exports.PartnerService = PartnerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PartnerService);
//# sourceMappingURL=partner.service.js.map