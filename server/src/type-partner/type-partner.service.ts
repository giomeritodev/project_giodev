import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TypePartnerType } from './TypePartnerType';

@Injectable()
export class TypePartnerService {

    constructor(
        private readonly prisma: PrismaService
    ){}

    async createTypePartner({name}: TypePartnerType): Promise<TypePartnerType>{
        return await this.prisma.typePartner.create({
            data: {
                name
            },
            select: {
                id: true,
                name: true,
                partners: true
            },
        })
    }
}
