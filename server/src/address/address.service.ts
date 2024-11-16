import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddressType } from './AddressType';

@Injectable()
export class AddressService {
    constructor(private readonly prisma: PrismaService){}

    async createAddress({public_place, complement, number_address, cep, sector, cityId, partnerId}: AddressType){
        const address = await this.prisma.address.create({
            data: {
                public_place, complement, number_address, cep, sector, cityId, partnerId
            },
            select: {
                id: true,
                public_place: true,
                complement: true,
                number_address: true,
                cep: true,
                sector: true,
                cityId: true,
                city: {
                    select: {
                        name: true,
                        state: {
                            select: {
                                name: true,
                                uf: true,
                            }
                        },
                    }
                },
                partner: true,
            },            
        })
        return address;
    }

    async findBy(id: number){
        return await this.prisma.address.findFirst({
            where: {id},
            select: {
                id: true,
                public_place: true,
                complement: true,
                number_address: true,
                cep: true,
                sector: true,
                cityId: true,
                city: {
                    select: {
                        name: true,
                        state: {
                            select: {
                                name: true,
                                uf: true,
                            }
                        },
                    }
                },
                partner: true,
            }
        })
    }
}
