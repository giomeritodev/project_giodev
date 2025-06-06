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
exports.TypePartnerService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let TypePartnerService = class TypePartnerService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createTypePartner({ name }) {
        return await this.prisma.typePartner.create({
            data: {
                name
            },
            select: {
                id: true,
                name: true,
                partners: true
            },
        });
    }
    async findAllTypePartner() {
        return await this.prisma.typePartner.findMany();
    }
    async deleteTypePartner(id) {
        try {
            return await this.prisma.typePartner.delete({
                where: {
                    id
                }
            });
        }
        catch (error) {
            console.log(error, "Houve um erro ao deletar o tipo de pagamento");
        }
    }
    async findByTypePartner(id) {
        return await this.prisma.typePartner.findFirst({
            where: {
                id
            }
        });
    }
    async findByName(name) {
        return await this.prisma.typePartner.findFirst({
            where: {
                name: name
            }
        });
    }
    async editTypePartner(id, typ) {
        const typePartner = this.findByTypePartner(id);
        return await this.prisma.typePartner.update({
            where: {
                id
            },
            data: {
                ...typePartner,
                ...typ
            }
        });
    }
};
exports.TypePartnerService = TypePartnerService;
exports.TypePartnerService = TypePartnerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TypePartnerService);
//# sourceMappingURL=type-partner.service.js.map