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
            entries: {
                id: number;
                dateEntry: string;
                numberDocument: number;
                statusId: number;
                partnerId: number;
                statusPaymentId: number;
                createdAt: Date;
                updatedAt: Date;
            }[];
            sales: {
                id: number;
                dateSale: string;
                partnerId: number;
                typeSale: string;
                statusId: number;
                typePayment: number;
                statusPaymentId: number;
                createdAt: Date;
                updatedAt: Date;
            }[];
            contacts: {
                id: number;
                fone: string;
                email: string;
                name: string | null;
                position: string | null;
                partnerId: number;
            }[];
        }[];
        total: number;
        totalPages: number;
    }>;
    findAllPartners(): Promise<PartnerType[]>;
    findAllPartnerName(name: string): Promise<PartnerType[]>;
    findByPartner(id: number): Promise<PartnerType>;
    findAllPartnersName(id: number): Promise<PartnerType[]>;
    createPartner(partner: PartnerType): Promise<PartnerType>;
    editPartner(id: number, partner: PartnerType): Promise<PartnerType>;
    deletePartner(id: number): Promise<PartnerType>;
}
