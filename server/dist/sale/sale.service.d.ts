import { PrismaService } from 'src/prisma/prisma.service';
import { SaleType } from './SaleType';
export declare class SaleService {
    private prisma;
    constructor(prisma: PrismaService);
    findBySale(id: number): Promise<SaleType>;
    findAllSales(page: number, search?: string): Promise<{
        total: number;
        totalPages: number;
        sale: {
            partner: {
                id: number;
                name: string;
            };
            statusPayment: {
                id: number;
                name: string;
            };
            status: {
                id: number;
                name: string;
            };
            id: number;
            partnerId: number;
            statusPaymentId: number;
            dateSale: string;
            typeSale: string;
            typePayment: number;
        }[];
    }>;
    createSale({ dateSale, partnerId, typeSale, typePayment, statusPaymentId, statusId }: SaleType): Promise<SaleType>;
    finaliseSale(id: number, sale: SaleType): Promise<SaleType>;
}
