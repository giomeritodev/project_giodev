import { PartnerService } from './partner.service';
import { PartnerType } from './PartnerType';
export declare class PartnerController {
    private partnerService;
    constructor(partnerService: PartnerService);
    findAll(request: any): Promise<{
        partner: {
            typePartner: {
                id: number;
                name: string;
            };
            id: number;
            name: string;
            cpfOrCnpj: string;
            fone: string;
            entries: {
                id: number;
                dateEntry: string;
                numberDocument: number;
                partnerId: number;
                status: number;
                createdAt: Date;
                updatedAt: Date;
            }[];
            sales: {
                id: number;
                dateSale: string;
                partnerId: number;
                typeSale: string;
                status: string;
                typePayment: number;
                createdAt: Date;
                updatedAt: Date;
                statusPayment: number;
            }[];
        }[];
        total: number;
        totalPages: number;
    }>;
    findAllPartners(): Promise<PartnerType[]>;
    findByPartner(id: number): Promise<PartnerType>;
    createPartner(partner: PartnerType): Promise<PartnerType>;
    editPartner(id: number, partner: PartnerType): Promise<PartnerType>;
    deletePartner(id: number): Promise<PartnerType>;
}
