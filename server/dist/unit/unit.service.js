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
exports.UnitService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let UnitService = class UnitService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAllUnits() {
        return await this.prisma.unit.findMany();
    }
    async findAllUnitsPagination(page, search) {
        const take = 5;
        const skip = (page - 1) * take;
        const [unities, total] = await this.prisma.$transaction([
            this.prisma.unit.findMany({
                where: {
                    name: {
                        contains: search
                    }
                },
                orderBy: {
                    id: 'desc'
                },
                select: {
                    id: true,
                    name: true,
                    sigla: true,
                    products: true,
                },
                take,
                skip,
            }),
            this.prisma.unit.count()
        ]);
        const totalPages = Math.ceil(total / take);
        return {
            unities,
            total,
            totalPages
        };
    }
    async findByUnit(id) {
        return await this.prisma.unit.findUnique({
            where: { id: Number(id) },
            include: {
                products: true,
            }
        });
    }
    async createUnit(data) {
        return await this.prisma.unit.create({ data });
    }
    async deleteUnit(id) {
        return await this.prisma.unit.delete({
            where: { id: Number(id) }
        });
    }
    async editUnit(id, unit) {
        const un = this.findByUnit(id);
        return await this.prisma.unit.update({
            where: { id: Number(id) },
            data: {
                ...un,
                ...unit,
            }
        });
    }
};
exports.UnitService = UnitService;
exports.UnitService = UnitService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UnitService);
//# sourceMappingURL=unit.service.js.map