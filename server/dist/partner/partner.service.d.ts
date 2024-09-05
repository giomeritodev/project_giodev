import { PartnerType } from './PartnerType';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class PartnerService {
    private prisma;
    constructor(prisma: PrismaService);
    findByPartner(id: number): Promise<PartnerType>;
    findAllPartiners(): Promise<PartnerType[]>;
    createPartner({ name, cpfOrCnpj, type, fone }: PartnerType): Promise<PartnerType>;
    editPartner(id: number, { name, cpfOrCnpj, type, fone }: PartnerType): Promise<PartnerType>;
    deletePartner(id: number): Promise<PartnerType>;
}
