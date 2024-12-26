import { AddressType } from "./AddressType";
import { ContactType } from "./ContactType";
import { TypePartner } from "./TypePartner";

export interface PartnerType {
    id: number;
    name: string;
    cpfOrCnpj: string;
    typeParnerId: number;
    typePartner: TypePartner;
    contacts: ContactType;
    addresses: AddressType;
}