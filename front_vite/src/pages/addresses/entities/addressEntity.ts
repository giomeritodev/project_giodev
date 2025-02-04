
export interface AddressType {
    id?: number;
    public_place: string;
    complement: string;
    number_address: number;
    cep: string;
    sector: string;
    partnerId: number;
    partner: {
        id: number;
        name: string;
        CpfOrCnpj: string;
        typePartnerId: number;
        typePartner: {
            id: number;
            name: string;
        }
    }
    cityId: number;

    city: {
        id: number;
        name: number;
        stateId: number;
        state: {
            id: number;
            name: string;
            uf: string;
        }
    }
}