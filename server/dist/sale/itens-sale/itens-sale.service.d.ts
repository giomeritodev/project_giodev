import { PrismaService } from 'src/prisma/prisma.service';
import { ItensSaleType } from './ItensSaleType';
export declare class ItensSaleService {
    private prisma;
    constructor(prisma: PrismaService);
    addItensSale({ saleId, productId, amount, discount }: {
        saleId: any;
        productId: any;
        amount: any;
        discount: any;
    }): Promise<ItensSaleType>;
    findAllItensBySale(saleId: number): Promise<ItensSaleType[]>;
}
