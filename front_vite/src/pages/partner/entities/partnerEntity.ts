
export interface PartnerType {
    id?: number;
    name: string;
    cpfOrCnpj: string;
    typePartnerId: number;
    
    typePartner: {
        id?: number;
        name: string; 
    }
}