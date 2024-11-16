import { TypePartner } from "./TypePartner";

export interface PartnerType {
    id: number;
    name: string;
    cpfOrCnpj: string;
    fone: string;
    typeParnerId: number;
    typePartner: TypePartner;
}