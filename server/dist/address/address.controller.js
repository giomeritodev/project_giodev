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
exports.AddressController = void 0;
const address_service_1 = require("./address.service");
const common_1 = require("@nestjs/common");
let AddressController = class AddressController {
    constructor(addressService) {
        this.addressService = addressService;
    }
    async create({ public_place, complement, number_address, cep, sector, cityId, partnerId }) {
        try {
            return await this.addressService.createAddress({
                public_place, complement, number_address, cep, sector, cityId, partnerId
            });
        }
        catch (error) {
            return ({
                message: "Ops, houve um erro ao cadastrar!"
            });
        }
    }
    async findBy(id) {
        return await this.addressService.findBy(Number(id));
    }
    async findAllAddressByPartner(partnerId) {
        try {
            return await this.addressService.findAllAddressByPartner(Number(partnerId));
        }
        catch (error) {
            return ({
                message: "Ops, houve um erro ao buscar os dados!"
            });
        }
    }
    async deleteAddressInPartner(id) {
        try {
            return await this.addressService.deleteByAddressInPartner(Number(id));
        }
        catch (error) {
            return { message: "Não foi possivel deletar o registro", error };
        }
    }
};
exports.AddressController = AddressController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AddressController.prototype, "create", null);
__decorate([
    (0, common_1.Get)("/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AddressController.prototype, "findBy", null);
__decorate([
    (0, common_1.Get)("/partner/:partnerId"),
    __param(0, (0, common_1.Param)("partnerId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AddressController.prototype, "findAllAddressByPartner", null);
__decorate([
    (0, common_1.Delete)("/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AddressController.prototype, "deleteAddressInPartner", null);
exports.AddressController = AddressController = __decorate([
    (0, common_1.Controller)('address'),
    __metadata("design:paramtypes", [address_service_1.AddressService])
], AddressController);
//# sourceMappingURL=address.controller.js.map