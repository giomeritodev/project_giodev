import { ContactService } from "./contact.service";
import { ContactType } from "./ContactType";
export declare class ContactController {
    private readonly contactService;
    constructor(contactService: ContactService);
    createContact(contact: ContactType): Promise<{
        id: number;
        fone: string;
        email: string;
        name: string | null;
        position: string | null;
        partnerId: number;
    }>;
    findByContact(id: number): Promise<{
        id: number;
        fone: string;
        email: string;
        name: string | null;
        position: string | null;
        partnerId: number;
    }[]>;
    findManyContactByPartner(partnerId: ContactType): Promise<{
        id: number;
        fone: string;
        email: string;
        name: string | null;
        position: string | null;
        partnerId: number;
    }[]>;
    updateContact(id: number, contact: ContactType): Promise<{
        id: number;
        fone: string;
        email: string;
        name: string | null;
        position: string | null;
        partnerId: number;
    }>;
}
