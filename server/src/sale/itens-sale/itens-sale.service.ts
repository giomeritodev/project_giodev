import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ItensSaleType } from './ItensSaleType';

@Injectable()
export class ItensSaleService {

    constructor(private prisma: PrismaService){}

    async addItensSale({saleId, productId, amount, discount}): Promise<ItensSaleType>{
        return await this.prisma.itemSale.create({
            data: {
                saleId,
                productId,
                amount,
                discount,                
            }
        })
    }

    async findAllItensBySale(saleId: number): Promise<ItensSaleType[]>{
        return await this.prisma.itemSale.findMany({
            where: {
                saleId
            },
            select: {
                id: true,
                saleId: true,
                sale: true,
                productId: true,
                product: true,
                amount: true,
                discount: true,
            }
        })
    }
}
