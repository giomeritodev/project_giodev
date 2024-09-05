import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProductType } from './ProductType';

@Injectable()
export class ProductService {
    
    constructor(
        private readonly prisma: PrismaService,
    ){}

    
    
    async findAllProducts(page: number, search?: string){      
        const take: number = 5;
        const skip = (page - 1) * take;

        const[product, total] = await this.prisma.$transaction([

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
        ])
        const totalPages = Math.ceil(total / take)

        return {
            product,
            total,
            totalPages
        }

    }

    async findAllProductsName(name: string): Promise<ProductType[]>{
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
        })
    }

    async findByProduct(id: number): Promise<ProductType>{
        const product = await this.prisma.product.findUnique({
            where: {id},
            include: {
                unit: true,
                category: true,
            }
        })
        if(!product){
            throw new Error("Produto não encontrado!")
            //console.log("Produto não encontrado!")
        }
        return product;
    }

    async createProduct({barCode, reference, name, price, unitId, categoryId}: ProductType): Promise<ProductType>{
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
        })
    }

    async editProduct(id: number, {barCode, reference, name, price, amount, unitId, categoryId}: ProductType): Promise<ProductType>{
        return await this.prisma.product.update({
            where: {id},
            data: {
                barCode,
                reference,
                name,
                price,
                amount, 
                unitId,
                categoryId,
            }
        })
    }

    async entryProduct(id: number, {amount}: ProductType): Promise<ProductType>{
        let prod = this.findByProduct(id);
        return await this.prisma.product.update({
            where: {id},
            data: {
                ...prod,
                amount: amount,
            }
        })
    }
    
    async deleteProduct(id: number): Promise<ProductType>{
        return await this.prisma.product.delete({
            where: {id}
        })
    }
}
