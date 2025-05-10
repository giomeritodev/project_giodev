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
exports.StatusController = void 0;
const common_1 = require("@nestjs/common");
const status_service_1 = require("./status.service");
let StatusController = class StatusController {
    constructor(statusService) {
        this.statusService = statusService;
    }
    async createStatus({ name }) {
        const result = await this.statusService.createStatus({ name });
        if (!result) {
            return ({ message: "Registro não foi criado!!" });
        }
        return result;
    }
    async findAll() {
        try {
            const result = await this.statusService.findAllStatus();
            return result;
        }
        catch (error) {
            throw new error("Error ao buscar todos os status!");
        }
    }
    async findById(id) {
        const result = await this.statusService.findById(Number(id));
        if (!result) {
            return ({ message: "Registro não encontrado!" });
        }
        return result;
    }
    async editStatus(id, status) {
        const result = await this.statusService.editStatus(Number(id), status);
        if (!result) {
            return ({ message: "Registro não encontrado!" });
        }
        return result;
    }
    async deleteStatus(id) {
        const consult = await this.statusService.findById(Number(id));
        if (!consult) {
            return ({ message: "Registro não encontrado!" });
        }
        else {
            const result = await this.statusService.deleteStatus(Number(id));
            return ({ message: "Registro deletado!" });
        }
    }
};
exports.StatusController = StatusController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StatusController.prototype, "createStatus", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StatusController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)("/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StatusController.prototype, "findById", null);
__decorate([
    (0, common_1.Put)("/edit/:id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], StatusController.prototype, "editStatus", null);
__decorate([
    (0, common_1.Delete)("/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StatusController.prototype, "deleteStatus", null);
exports.StatusController = StatusController = __decorate([
    (0, common_1.Controller)('status'),
    __metadata("design:paramtypes", [status_service_1.StatusService])
], StatusController);
//# sourceMappingURL=status.controller.js.map