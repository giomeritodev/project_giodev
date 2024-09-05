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
exports.EntryService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let EntryService = class EntryService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAllItensByEntry(entryId) {
        return await this.prisma.itemEntry.findMany({
            where: { entryId },
            select: {
                id: true,
                entryId: true,
                productId: true,
                product: true,
                amount: true,
                shoppingValue: true,
                entry: true,
            }
        });
    }
    async findAllPaymentsByEntry(id) {
        return await this.prisma.payment.findMany({
            where: {
                entryId: id
            },
            select: {
                id: true,
                entryId: true,
                entry: true,
                datePayment: true,
                formOfPayment: true,
                formOfPaymentId: true,
                valuePayment: true,
            }
        });
    }
    async findByEntry(id) {
        return await this.prisma.entry.findFirst({
            where: { id },
            select: {
                id: true,
                dateEntry: true,
                numberDocument: true,
                partnerId: true,
                status: true,
                partner: true,
                itensEntry: {
                    select: {
                        id: true,
                        amount: true,
                        entry: true,
                        entryId: true,
                        product: true,
                        productId: true,
                    }
                },
                payments: true,
            }
        });
    }
    async createEntry({ dateEntry, numberDocument, partnerId, status }) {
        return await this.prisma.entry.create({
            data: {
                dateEntry,
                numberDocument,
                partnerId,
                status,
            },
            select: {
                id: true,
                dateEntry: true,
                numberDocument: true,
                partnerId: true,
                status: true,
                partner: true,
            }
        });
    }
    async endEntry(id, status) {
        return await this.prisma.entry.update({
            where: {
                id: id
            },
            data: {
                status: 2
            }
        });
    }
    async findAllEntries() {
        return await this.prisma.entry.findMany({
            select: {
                id: true,
                dateEntry: true,
                numberDocument: true,
                partnerId: true,
                status: true,
                partner: true,
                payments: true,
            }
        });
    }
    async deleteEntry(id) {
        return await this.prisma.entry.delete({
            where: { id }
        });
    }
    async addItensEntry({ entryId, productId, amount, shoppingValue }) {
        return await this.prisma.itemEntry.create({
            data: {
                entryId,
                productId,
                amount,
                shoppingValue
            },
            select: {
                id: true,
                entryId: true,
                productId: true,
                product: true,
                amount: true,
                shoppingValue: true,
                entry: true,
            }
        });
    }
    async addPayment({ entryId, datePayment, formOfPaymentId, valuePayment }) {
        return await this.prisma.payment.create({
            data: {
                entryId,
                datePayment,
                formOfPaymentId,
                valuePayment,
            }
        });
    }
    async findAllPaymentByEntry(entryId) {
        return await this.prisma.payment.findMany({
            where: {
                entryId: entryId
            },
            select: {
                id: true,
                datePayment: true,
                entryId: true,
                entry: true,
                valuePayment: true,
                formOfPaymentId: true,
                formOfPayment: true,
            }
        });
    }
};
exports.EntryService = EntryService;
exports.EntryService = EntryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], EntryService);
//# sourceMappingURL=entry.service.js.map