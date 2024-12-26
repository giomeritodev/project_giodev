import { CityType } from "./CityType";

export interface AddressType {
    id?: number;
    public_place: string;
    complement: string;
    number_address: number;
    cep: string;
    sector: string;
    cityId: number;
    partnerId: number;
    city: CityType
}