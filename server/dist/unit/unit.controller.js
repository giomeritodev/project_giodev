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
exports.UnitController = void 0;
const common_1 = require("@nestjs/common");
const unit_service_1 = require("./unit.service");
let UnitController = class UnitController {
    constructor(unitService) {
        this.unitService = unitService;
    }
    async findAllUnityPagination(request) {
        const { page, search } = request.query;
        return await this.unitService.findAllUnitsPagination(page, search);
    }
    async findAllUnity() {
        return await this.unitService.findAllUnits();
    }
    async findByUnit(id) {
        return await this.unitService.findByUnit(id);
    }
    async createUnit(unitData) {
        return await this.unitService.createUnit(unitData);
    }
    async deleteUnit(id) {
        return await this.unitService.deleteUnit(id);
    }
    async editUnit(id, unit) {
        return await this.unitService.editUnit(Number(id), unit);
    }
};
exports.UnitController = UnitController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UnitController.prototype, "findAllUnityPagination", null);
__decorate([
    (0, common_1.Get)("/all"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UnitController.prototype, "findAllUnity", null);
__decorate([
    (0, common_1.Get)("/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UnitController.prototype, "findByUnit", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UnitController.prototype, "createUnit", null);
__decorate([
    (0, common_1.Delete)("/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UnitController.prototype, "deleteUnit", null);
__decorate([
    (0, common_1.Put)("/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], UnitController.prototype, "editUnit", null);
exports.UnitController = UnitController = __decorate([
    (0, common_1.Controller)('unit'),
    __metadata("design:paramtypes", [unit_service_1.UnitService])
], UnitController);
//# sourceMappingURL=unit.controller.js.map