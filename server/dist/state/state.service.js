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
exports.StateService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let StateService = class StateService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createState({ name, uf }) {
        return await this.prisma.state.create({
            data: {
                name, uf
            }
        });
    }
    async findAllState() {
        return await this.prisma.state.findMany();
    }
    async findById(id) {
        return await this.prisma.state.findFirst({ where: { id: id } });
    }
    async editState(id, { name, uf }) {
        return await this.prisma.state.update({ where: { id }, data: { name, uf } });
    }
    async deleteState(id) {
        return await this.prisma.state.delete({ where: { id: id } });
    }
};
exports.StateService = StateService;
exports.StateService = StateService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], StateService);
//# sourceMappingURL=state.service.js.map