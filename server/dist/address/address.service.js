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
exports.AddressService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let AddressService = class AddressService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createAddress({ public_place, complement, number_address, cep, sector, cityId, partnerId }) {
        const address = await this.prisma.address.create({
            data: {
                public_place, complement, number_address, cep, sector, cityId, partnerId
            },
            select: {
                id: true,
                public_place: true,
                complement: true,
                number_address: true,
                cep: true,
                sector: true,
                cityId: true,
                city: {
                    select: {
                        name: true,
                        state: {
                            select: {
                                name: true,
                                uf: true,
                            }
                        },
                    }
                },
                partner: true,
            },
        });
        return address;
    }
    async findBy(id) {
        return await this.prisma.address.findFirst({
            where: { id },
            select: {
                id: true,
                public_place: true,
                complement: true,
                number_address: true,
                cep: true,
                sector: true,
                cityId: true,
                city: {
                    select: {
                        name: true,
                        state: {
                            select: {
                                name: true,
                                uf: true,
                            }
                        },
                    }
                },
                partner: true,
            }
        });
    }
    async findAllAddressByPartner(partnerId) {
        return await this.prisma.address.findMany({
            where: {
                partnerId
            },
            select: {
                id: true,
                public_place: true,
                complement: true,
                number_address: true,
                cep: true,
                sector: true,
                cityId: true,
                partnerId: true,
                city: {
                    select: {
                        name: true,
                        state: {
                            select: {
                                name: true,
                                uf: true,
                            }
                        },
                    }
                },
            }
        });
    }
    async deleteByAddressInPartner(id) {
        return await this.prisma.address.delete({
            where: {
                id
            }
        });
    }
};
exports.AddressService = AddressService;
exports.AddressService = AddressService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AddressService);
//# sourceMappingURL=address.service.js.map