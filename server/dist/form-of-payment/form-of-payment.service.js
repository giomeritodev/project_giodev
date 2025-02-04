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
exports.FormOfPaymentService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let FormOfPaymentService = class FormOfPaymentService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findByFormOfPayment(id) {
        return await this.prisma.formOfPayment.findFirst({
            where: {
                id
            }
        });
    }
    async findAllFormsOfPayments() {
        return await this.prisma.formOfPayment.findMany();
    }
    async createFormOfPayment({ name }) {
        return await this.prisma.formOfPayment.create({
            data: {
                name
            }
        });
    }
    async deleteFormOfPayment(id) {
        return await this.prisma.formOfPayment.delete({
            where: {
                id
            }
        });
    }
    async editFormOfPayment(id, formOf) {
        const formOfPayment = this.findByFormOfPayment(id);
        return await this.prisma.formOfPayment.update({
            where: {
                id
            },
            data: {
                ...formOfPayment,
                ...formOf,
            }
        });
    }
};
exports.FormOfPaymentService = FormOfPaymentService;
exports.FormOfPaymentService = FormOfPaymentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FormOfPaymentService);
//# sourceMappingURL=form-of-payment.service.js.map