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
exports.StatusPaymentService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let StatusPaymentService = class StatusPaymentService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findByStatusPayment(id) {
        return await this.prisma.statusPayment.findFirst({
            where: {
                id
            }
        });
    }
    async findAllStatusPayments() {
        return await this.prisma.statusPayment.findMany();
    }
    async createStatusPayment({ name }) {
        return await this.prisma.statusPayment.create({
            data: {
                name
            }
        });
    }
    async deleteStatusPayment(id) {
        return await this.prisma.statusPayment.delete({
            where: {
                id
            }
        });
    }
    async editStatusPayment(id, status) {
        const statusPayment = this.findByStatusPayment(id);
        return await this.prisma.statusPayment.update({
            where: {
                id
            },
            data: {
                ...statusPayment,
                ...status,
            }
        });
    }
};
exports.StatusPaymentService = StatusPaymentService;
exports.StatusPaymentService = StatusPaymentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], StatusPaymentService);
//# sourceMappingURL=status-payment.service.js.map