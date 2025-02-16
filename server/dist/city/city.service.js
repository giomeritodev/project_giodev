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
exports.CityService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CityService = class CityService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createCity({ name, stateId }) {
        return await this.prisma.city.create({ data: { name, stateId } });
    }
    async findAll() {
        return await this.prisma.city.findMany({
            include: {
                state: true
            }
        });
    }
    async findById(id) {
        return await this.prisma.city.findFirst({ where: { id }, include: { state: true } });
    }
    async editCity(id, cit) {
        const city = this.findById(id);
        return await this.prisma.city.update({ where: { id }, data: { ...city, ...cit } });
    }
    async deleteCity(id) {
        return await this.prisma.city.delete({ where: { id } });
    }
    async findCityInState(id) {
        const [citiesState] = await this.prisma.$transaction([
            this.prisma.city.findMany({
                where: {
                    stateId: id
                },
            }),
            this.prisma.city.count(),
        ]);
        return {
            citiesState,
        };
    }
};
exports.CityService = CityService;
exports.CityService = CityService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CityService);
//# sourceMappingURL=city.service.js.map