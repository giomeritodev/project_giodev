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

    async findAllTypePartner(): Promise<TypePartnerType[]>{
        return await this.prisma.typePartner.findMany();
    }

    async deleteTypePartner(id: number): Promise<TypePartnerType>{
        try {
            return await this.prisma.typePartner.delete({
                where: {
                    id
                }
            }); 
        } catch (error) {
            console.log(error, "Houve um erro ao deletar o tipo de pagamento")
        }
    }

    async findByTypePartner(id: number): Promise<TypePartnerType>{
        return await this.prisma.typePartner.findFirst({
            where: {
                id
            }
        })
    }

    async findByName(name: string){
        return await this.prisma.typePartner.findFirst({
            where: {
                name: name
            }
        })
    }

    async editTypePartner(id: number, typ: TypePartnerType): Promise<TypePartnerType>{
        const typePartner = this.findByTypePartner(id);
        return await this.prisma.typePartner.update({
            where: {
                id
            },
            data: {
                ...typePartner,
                ...typ
            }
        })
    }
}
