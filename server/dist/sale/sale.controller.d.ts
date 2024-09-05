import { SaleService } from './sale.service';
import { SaleType } from './SaleType';
import { ItensSaleType } from './itens-sale/ItensSaleType';
import { ItensSaleService } from './itens-sale/itens-sale.service';
export declare class SaleController {
    private saleService;
    private itensSaleService;
    constructor(saleService: SaleService, itensSaleService: ItensSaleService);
    findBySale(id: number): Promise<SaleType>;
    findAllSales(request: any): Promise<{
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
    createSale(sale: SaleType): Promise<SaleType>;
    addItensSale(itensSale: ItensSaleType): Promise<ItensSaleType>;
    findAllItensBySale(saleId: number): Promise<ItensSaleType[]>;
    finaliseSale(id: number, status: SaleType): Promise<SaleType>;
}
