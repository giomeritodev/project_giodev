import { PartnerType } from './PartnerType';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class PartnerService {
    private prisma;
    constructor(prisma: PrismaService);
    findByPartner(id: number): Promise<PartnerType>;
    findAllPartners(): Promise<PartnerType[]>;
    findAll(page: number, search?: string): Promise<{
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
    createPartner({ name, cpfOrCnpj, typePartnerId }: PartnerType): Promise<PartnerType>;
    editPartner(id: number, { name, cpfOrCnpj, typePartnerId }: PartnerType): Promise<PartnerType>;
    deletePartner(id: number): Promise<PartnerType>;
}
