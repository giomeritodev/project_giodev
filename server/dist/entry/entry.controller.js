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
exports.EntryController = void 0;
const common_1 = require("@nestjs/common");
const entry_service_1 = require("./entry.service");
let EntryController = class EntryController {
    constructor(entryService) {
        this.entryService = entryService;
    }
    async paymentEntry(payment) {
        return await this.entryService.addPayment(payment);
    }
    async findAllPaymentsByEntry(id) {
        return await this.entryService.findAllPaymentsByEntry(Number(id));
    }
    async deletePayment(id, item) {
        return await this.entryService.deletePayment(Number(id), Number(item));
    }
    async findAllItensByEntry(id) {
        return await this.entryService.findAllItensByEntry(Number(id));
    }
    async findByEntry(id) {
        return await this.entryService.findByEntry(Number(id));
    }
    async findAllEntries() {
        return await this.entryService.findAllEntries();
    }
    async createEntry(entry) {
        return await this.entryService.createEntry(entry);
    }
    async addItemEntry(itens) {
        return await this.entryService.addItensEntry(itens);
    }
    async deleteEntry(id) {
        return await this.entryService.deleteEntry(Number(id));
    }
    async deleteItemEntry(id, item) {
        return await this.entryService.deleteItemEntry(Number(id), Number(item));
    }
    async endEntry(id, status) {
        return await this.entryService.endEntry(Number(id), Number(status));
    }
};
exports.EntryController = EntryController;
__decorate([
    (0, common_1.Post)("/payment"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EntryController.prototype, "paymentEntry", null);
__decorate([
    (0, common_1.Get)("/payment/:entryId"),
    __param(0, (0, common_1.Param)("entryId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EntryController.prototype, "findAllPaymentsByEntry", null);
__decorate([
    (0, common_1.Delete)("/payment/:id/delete/:itemId"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Param)("itemId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], EntryController.prototype, "deletePayment", null);
__decorate([
    (0, common_1.Get)("/itens/:entryId"),
    __param(0, (0, common_1.Param)("entryId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EntryController.prototype, "findAllItensByEntry", null);
__decorate([
    (0, common_1.Get)("/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EntryController.prototype, "findByEntry", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EntryController.prototype, "findAllEntries", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EntryController.prototype, "createEntry", null);
__decorate([
    (0, common_1.Post)("/item-entry"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EntryController.prototype, "addItemEntry", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EntryController.prototype, "deleteEntry", null);
__decorate([
    (0, common_1.Delete)("/:id/delete/:itemId"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Param)("itemId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], EntryController.prototype, "deleteItemEntry", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], EntryController.prototype, "endEntry", null);
exports.EntryController = EntryController = __decorate([
    (0, common_1.Controller)('entry'),
    __metadata("design:paramtypes", [entry_service_1.EntryService])
], EntryController);
//# sourceMappingURL=entry.controller.js.map