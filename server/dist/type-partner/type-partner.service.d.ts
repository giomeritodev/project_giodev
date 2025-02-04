import { PrismaService } from 'src/prisma/prisma.service';
import { TypePartnerType } from './TypePartnerType';
export declare class TypePartnerService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createTypePartner({ name }: TypePartnerType): Promise<TypePartnerType>;
    findAllTypePartner(): Promise<TypePartnerType[]>;
    deleteTypePartner(id: number): Promise<TypePartnerType>;
    findByTypePartner(id: number): Promise<TypePartnerType>;
    findByName(name: string): Promise<{
        id: number;
        name: string;
    }>;
    editTypePartner(id: number, typ: TypePartnerType): Promise<TypePartnerType>;
}
