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
                type: true,
                fone: true
            }
        });
    }
    async findAllPartiners() {
        return await this.prisma.partner.findMany({
            select: {
                id: true,
                name: true,
                cpfOrCnpj: true,
                type: true,
                fone: true
            }
        });
    }
    async createPartner({ name, cpfOrCnpj, type, fone }) {
        return await this.prisma.partner.create({
            data: {
                name,
                cpfOrCnpj,
                type,
                fone
            },
            select: {
                id: true,
                name: true,
                cpfOrCnpj: true,
                type: true,
                fone: true
            }
        });
    }
    async editPartner(id, { name, cpfOrCnpj, type, fone }) {
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
                type,
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