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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormOfPaymentController = void 0;
const common_1 = require("@nestjs/common");
const form_of_payment_service_1 = require("./form-of-payment.service");
let FormOfPaymentController = class FormOfPaymentController {
    constructor(formOfPaymentService) {
        this.formOfPaymentService = formOfPaymentService;
    }
    async findAllFormsOfPayments() {
        return await this.formOfPaymentService.findAllFormsOfPayments();
    }
    async createFormOfPayment(formOfPayment) {
        return await this.formOfPaymentService.createFormOfPayment(formOfPayment);
    }
    async deleteFormOfPayment(id) {
        return await this.formOfPaymentService.deleteFormOfPayment(Number(id));
    }
    async editFormOfPayment(id, formOf) {
        return await this.formOfPaymentService.editFormOfPayment(Number(id), formOf);
    }
};
exports.FormOfPaymentController = FormOfPaymentController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FormOfPaymentController.prototype, "findAllFormsOfPayments", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FormOfPaymentController.prototype, "createFormOfPayment", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], FormOfPaymentController.prototype, "deleteFormOfPayment", null);
__decorate([
    (0, common_1.Put)('/edit/:id'),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], FormOfPaymentController.prototype, "editFormOfPayment", null);
exports.FormOfPaymentController = FormOfPaymentController = __decorate([
    (0, common_1.Controller)('form-of-payment'),
    __metadata("design:paramtypes", [form_of_payment_service_1.FormOfPaymentService])
], FormOfPaymentController);
//# sourceMappingURL=form-of-payment.controller.js.map