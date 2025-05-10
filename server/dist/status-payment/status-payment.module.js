"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusPaymentModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const status_payment_service_1 = require("./status-payment.service");
const status_payment_controller_1 = require("./status-payment.controller");
let StatusPaymentModule = class StatusPaymentModule {
};
exports.StatusPaymentModule = StatusPaymentModule;
exports.StatusPaymentModule = StatusPaymentModule = __decorate([
    (0, common_1.Module)({
        providers: [status_payment_service_1.StatusPaymentService, prisma_service_1.PrismaService],
        controllers: [status_payment_controller_1.StatusPaymentController]
    })
], StatusPaymentModule);
//# sourceMappingURL=status-payment.module.js.map