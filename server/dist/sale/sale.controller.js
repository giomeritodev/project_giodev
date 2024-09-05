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
exports.SaleController = void 0;
const common_1 = require("@nestjs/common");
const sale_service_1 = require("./sale.service");
const itens_sale_service_1 = require("./itens-sale/itens-sale.service");
let SaleController = class SaleController {
    constructor(saleService, itensSaleService) {
        this.saleService = saleService;
        this.itensSaleService = itensSaleService;
    }
    async findBySale(id) {
        return await this.saleService.findBySale(Number(id));
    }
    async findAllSales(request) {
        const { page, search } = request.query;
        console.log(page, search);
        try {
            return await this.saleService.findAllSales(page, search);
        }
        catch (error) {
            console.log("Houve um erro na paginação");
        }
    }
    async createSale(sale) {
        return await this.saleService.createSale(sale);
    }
    async addItensSale(itensSale) {
        return await this.itensSaleService.addItensSale(itensSale);
    }
    async findAllItensBySale(saleId) {
        return await this.itensSaleService.findAllItensBySale(Number(saleId));
    }
    async finaliseSale(id, status) {
        return await this.saleService.finaliseSale(Number(id), status);
    }
};
exports.SaleController = SaleController;
__decorate([
    (0, common_1.Get)("/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SaleController.prototype, "findBySale", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SaleController.prototype, "findAllSales", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SaleController.prototype, "createSale", null);
__decorate([
    (0, common_1.Post)("/itens"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SaleController.prototype, "addItensSale", null);
__decorate([
    (0, common_1.Get)("/itens/:saleId"),
    __param(0, (0, common_1.Param)("saleId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SaleController.prototype, "findAllItensBySale", null);
__decorate([
    (0, common_1.Patch)("/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], SaleController.prototype, "finaliseSale", null);
exports.SaleController = SaleController = __decorate([
    (0, common_1.Controller)('sale'),
    __metadata("design:paramtypes", [sale_service_1.SaleService,
        itens_sale_service_1.ItensSaleService])
], SaleController);
//# sourceMappingURL=sale.controller.js.map