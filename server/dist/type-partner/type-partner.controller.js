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
exports.TypePartnerController = void 0;
const common_1 = require("@nestjs/common");
const type_partner_service_1 = require("./type-partner.service");
let TypePartnerController = class TypePartnerController {
    constructor(typePartnerService) {
        this.typePartnerService = typePartnerService;
    }
    async createTypePartner({ name }) {
        try {
            return await this.typePartnerService.createTypePartner({ name });
        }
        catch (error) {
            return ({ message: "Ops, houve um erro ao cadastrar!" });
        }
    }
    async findAll() {
        try {
            return await this.typePartnerService.findAllTypePartner();
        }
        catch (error) {
            return ({ message: "Houve um erro ao consultar todos!" });
        }
    }
    async deleteTypePartner(id) {
        try {
            return await this.typePartnerService.deleteTypePartner(Number(id));
        }
        catch (error) {
            return ({ message: "Houve um erro ao deletar o tipo de pagamento!" });
        }
    }
};
exports.TypePartnerController = TypePartnerController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TypePartnerController.prototype, "createTypePartner", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TypePartnerController.prototype, "findAll", null);
__decorate([
    (0, common_1.Delete)("/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TypePartnerController.prototype, "deleteTypePartner", null);
exports.TypePartnerController = TypePartnerController = __decorate([
    (0, common_1.Controller)('type-partner'),
    __metadata("design:paramtypes", [type_partner_service_1.TypePartnerService])
], TypePartnerController);
//# sourceMappingURL=type-partner.controller.js.map