import { PrismaService } from "src/prisma/prisma.service";
import { ContactType } from "./ContactType";
export declare class ContactService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createContact({ fone, email, name, position, partnerId }: ContactType): Promise<{
        id: number;
        fone: string;
        email: string;
        name: string | null;
        position: string | null;
        partnerId: number;
    }>;
    findManyContactByPartner(partnerId: number): Promise<ContactType[]>;
    findByContact(id: number): Promise<{
        id: number;
        fone: string;
        email: string;
        name: string | null;
        position: string | null;
        partnerId: number;
    }[]>;
    updateContactByParner(id: number, { fone, email, name, position, partnerId }: ContactType): Promise<{
        id: number;
        fone: string;
        email: string;
        name: string | null;
        position: string | null;
        partnerId: number;
    }>;
    deleteContactByPartner(id: number): Promise<{
        id: number;
        fone: string;
        email: string;
        name: string | null;
        position: string | null;
        partnerId: number;
    }>;
}
