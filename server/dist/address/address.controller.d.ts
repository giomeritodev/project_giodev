import { AddressService } from './address.service';
import { AddressType } from './AddressType';
export declare class AddressController {
    private readonly addressService;
    constructor(addressService: AddressService);
    create({ public_place, complement, number_address, cep, sector, cityId, partnerId }: AddressType): Promise<{
        partner: {
            id: number;
            name: string;
            cpfOrCnpj: string;
            typePartnerId: number;
        };
        city: {
            state: {
                name: string;
                uf: string;
            };
            name: string;
        };
        id: number;
        public_place: string;
        complement: string;
        number_address: number;
        cep: string;
        sector: string;
        cityId: number;
    } | {
        message: string;
    }>;
    findBy(id: number): Promise<{
        partner: {
            id: number;
            name: string;
            cpfOrCnpj: string;
            typePartnerId: number;
        };
        city: {
            state: {
                name: string;
                uf: string;
            };
            name: string;
        };
        id: number;
        public_place: string;
        complement: string;
        number_address: number;
        cep: string;
        sector: string;
        cityId: number;
    }>;
    findAllAddressByPartner(partnerId: number): Promise<AddressType[] | {
        message: string;
    }>;
    deleteAddressInPartner(id: number): Promise<{
        id: number;
        public_place: string;
        complement: string;
        number_address: number;
        cep: string;
        sector: string;
        cityId: number;
        partnerId: number;
    } | {
        message: string;
        error: any;
    }>;
}
