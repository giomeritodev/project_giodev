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
exports.CityController = void 0;
const common_1 = require("@nestjs/common");
const city_service_1 = require("./city.service");
let CityController = class CityController {
    constructor(cityService) {
        this.cityService = cityService;
    }
    async createCity({ name, stateId }) {
        const result = await this.cityService.createCity({ name, stateId });
        if (!result) {
            return ({ message: "Registro não foi cadastrado!" });
        }
        return result;
    }
    async findAll() {
        const result = await this.cityService.findAll();
        return result;
    }
    async findBy(id) {
        const result = await this.cityService.findById(Number(id));
        return result;
    }
    async updateCity(id, { name, stateId }) {
        const result = await this.cityService.editCity(Number(id), { name, stateId });
        if (!result) {
            return ({ message: "Registro não encontrado!" });
        }
        return result;
    }
    async deleteCity(id) {
        try {
            await this.cityService.deleteCity(Number(id));
            return ({ message: "Deletado com sucesso!" });
        }
        catch (error) {
            return ({ message: "Erro ao deletar!" });
        }
    }
};
exports.CityController = CityController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CityController.prototype, "createCity", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CityController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)("/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CityController.prototype, "findBy", null);
__decorate([
    (0, common_1.Put)("/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], CityController.prototype, "updateCity", null);
__decorate([
    (0, common_1.Delete)("/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CityController.prototype, "deleteCity", null);
exports.CityController = CityController = __decorate([
    (0, common_1.Controller)('city'),
    __metadata("design:paramtypes", [city_service_1.CityService])
], CityController);
//# sourceMappingURL=city.controller.js.map