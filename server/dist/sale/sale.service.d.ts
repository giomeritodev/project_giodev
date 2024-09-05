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
            id: number;
            partnerId: number;
            status: string;
            dateSale: string;
            typeSale: string;
            typePayment: number;
            statusPayment: number;
        }[];
    }>;
    createSale({ dateSale, partnerId, typeSale, typePayment, status }: SaleType): Promise<SaleType>;
    finaliseSale(id: number, sale: SaleType): Promise<SaleType>;
}
