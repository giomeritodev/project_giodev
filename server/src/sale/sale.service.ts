import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SaleType } from './SaleType';
import { count } from 'console';

@Injectable()
export class SaleService {

    constructor(private prisma: PrismaService){}

    async findBySale(id: number): Promise<SaleType>{
        return await this.prisma.sale.findFirst({
            where: {id},
            select: {
                id: true,
                dateSale: true,
                partnerId: true,
                typeSale: true,
                typePayment: true,
                statusId: true,
                statusPaymentId: true,
                statusPayment: {
                    select: {
                        id: true,
                        name: true,
                    }                        
                },
                partner: true,                
            }
        })
    }

    async findAllSales(page: number, search?: string){        
        const take: number = 5;
        const skip = (page - 1) * take;

        console.log(take, skip)
       
        const [sale, total] = await this.prisma.$transaction([
            this.prisma.sale.findMany({
                where: {
                    partner: {
                        name: {contains: search}
                    }
                }, 
                orderBy: {
                    id: 'desc'
                },          
                select: {
                    id: true,
                    dateSale: true,
                    partnerId: true,
                    typeSale: true,
                    typePayment: true,
                    status: true,
                    statusPaymentId: true,
                    statusPayment: {
                        select: {
                            id: true,
                            name: true,
                        }                        
                    },
                    partner: {
                        select: {
                            id: true,
                            name: true,
                        }
                    },           
                },  
                take,
                skip       
            }),
            this.prisma.sale.count(),
        ])
        const totalPages = Math.ceil(total / take);
        

        return {total, totalPages, sale}
        
        // const sales = await this.prisma.sale.findMany({
        //     select: {
        //         id: true,
        //         dateSale: true,
        //         partnerId: true,
        //         typeSale: true,
        //         typePayment: true,
        //         status: true,
        //         statusPayment: true,
        //         partner: {
        //             select: {
        //                 id: true,
        //                 name: true,
        //             }
        //         },           
        //     },            
        // });
        // return sales;
    }

    async createSale({dateSale, partnerId, typeSale, typePayment, statusPaymentId, statusId}: SaleType): Promise<SaleType>{
        return await this.prisma.sale.create({
            data: {
                dateSale,
                partnerId,
                typeSale,
                typePayment,
                statusId,
                statusPaymentId,
            }
        })
    }

    async finaliseSale(id: number, sale: SaleType): Promise<SaleType>{
        let saleSelected = this.findBySale(id);
        return await this.prisma.sale.update({
            where: {id},
            data: {
                ...saleSelected,
                ...sale
            }
        })
    }
}
