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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ProductService = class ProductService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return await this.prisma.product.findMany({
            orderBy: {
                id: "desc"
            },
            select: {
                id: true,
                barCode: true,
                amount: true,
                category: {
                    select: {
                        id: true,
                        name: true,
                    }
                },
                unit: {
                    select: {
                        id: true,
                        name: true,
                        sigla: true,
                    }
                },
                name: true,
                price: true,
                reference: true,
            },
        });
    }
    async findAllProducts(page, search) {
        const take = 5;
        const skip = (page - 1) * take;
        const [product, total] = await this.prisma.$transaction([
            this.prisma.product.findMany({
                where: {
                    name: {
                        contains: search
                    }
                },
                orderBy: {
                    id: "desc"
                },
                select: {
                    id: true,
                    barCode: true,
                    amount: true,
                    category: {
                        select: {
                            id: true,
                            name: true,
                        }
                    },
                    unit: {
                        select: {
                            id: true,
                            name: true,
                            sigla: true,
                        }
                    },
                    name: true,
                    price: true,
                    reference: true,
                },
                take,
                skip,
            }),
            this.prisma.product.count(),
        ]);
        const totalPages = Math.ceil(total / take);
        return {
            product,
            total,
            totalPages
        };
    }
    async findAllProductsByReference(page, search) {
        const take = 5;
        const skip = (page - 1) * take;
        const [product, total] = await this.prisma.$transaction([
            this.prisma.product.findMany({
                where: {
                    reference: {
                        contains: search
                    }
                },
                orderBy: {
                    id: "desc"
                },
                select: {
                    id: true,
                    barCode: true,
                    amount: true,
                    category: {
                        select: {
                            id: true,
                            name: true,
                        }
                    },
                    unit: {
                        select: {
                            id: true,
                            name: true,
                            sigla: true,
                        }
                    },
                    name: true,
                    price: true,
                    reference: true,
                },
                take,
                skip,
            }),
            this.prisma.product.count(),
        ]);
        const totalPages = Math.ceil(total / take);
        return {
            product,
            total,
            totalPages
        };
    }
    async findAllProductsName(name) {
        return await this.prisma.product.findMany({
            where: {
                name: {
                    contains: name
                }
            },
            include: {
                category: true,
                unit: true,
            }
        });
    }
    async findByProduct(id) {
        const product = await this.prisma.product.findUnique({
            where: { id },
            include: {
                unit: true,
                category: true,
            }
        });
        if (!product) {
            throw new Error("Produto não encontrado!");
        }
        return product;
    }
    async createProduct({ barCode, reference, name, price, unitId, categoryId }) {
        return await this.prisma.product.create({
            data: {
                barCode,
                reference,
                name,
                price,
                amount: 0,
                unitId,
                categoryId,
            }
        });
    }
    async editProduct(id, { barCode, reference, name, price, amount, unitId, categoryId }) {
        return await this.prisma.product.update({
            where: { id },
            data: {
                barCode,
                reference,
                name,
                price,
                amount,
                unitId,
                categoryId,
            }
        });
    }
    async entryProduct(id, { amount }) {
        let prod = this.findByProduct(id);
        return await this.prisma.product.update({
            where: { id },
            data: {
                ...prod,
                amount: amount,
            }
        });
    }
    async deleteProduct(id) {
        return await this.prisma.product.delete({
            where: { id }
        });
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductService);
//# sourceMappingURL=product.service.js.map