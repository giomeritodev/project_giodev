import { PrismaService } from 'src/prisma/prisma.service';
import { TypePartnerType } from './TypePartnerType';
export declare class TypePartnerService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createTypePartner({ name }: TypePartnerType): Promise<TypePartnerType>;
    findAllTypePartner(): Promise<TypePartnerType[]>;
    deleteTypePartner(id: number): Promise<TypePartnerType>;
}
