import { PrismaService } from 'src/prisma/prisma.service';
import { AddressType } from './AddressType';
export declare class AddressService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createAddress({ public_place, complement, number_address, cep, sector, cityId, partnerId }: AddressType): Promise<{
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
    findAllAddressByPartner(partnerId: number): Promise<AddressType[]>;
}
