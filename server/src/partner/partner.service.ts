import { Injectable } from '@nestjs/common';
import { PartnerType } from './PartnerType';
import { PrismaService } from 'src/prisma/prisma.service';
import { TypePartnerType } from 'src/type-partner/TypePartnerType';

@Injectable()
export class PartnerService {
    constructor(
        private prisma: PrismaService
    ){}
    
    async findByPartner(id: number): Promise<PartnerType>{
        return await this.prisma.partner.findFirst({
            where: {
                id
            },
            select: {
                id: true,
                name: true,
                cpfOrCnpj: true,
                typePartnerId: true,
                typePartner: true,
                addresses: {
                    select: {
                        id: true,
                        public_place: true,
                        complement: true,
                        number_address: true,
                        cep: true,
                        city: {
                            select: {
                                id: true,
                                name: true,
                                state: true,
                            }
                        },
                        cityId: true,
                        partner: true,
                        sector: true,                        
                    }
                },           
            },
        })
    }

    async findAllPartners(): Promise<PartnerType[]>{
        return await this.prisma.partner.findMany({
            select: {
                id: true,
                name: true,
                cpfOrCnpj: true,
                typePartnerId: true,
                typePartner: true,
            }
        });
    }

    async findAllPartnersName(id: number): Promise<PartnerType[]>{
        return await this.prisma.partner.findMany({
            where: {
                typePartnerId: Number(id)
            },
            select: {
                id: true,
                name: true,
                cpfOrCnpj: true,
                typePartnerId: true,
                typePartner: true,
            }
        });
    }

    async findAllPartnerName(name: string): Promise<PartnerType[]>{
        return await this.prisma.partner.findMany({
            where: {
                name: name
            },
            select: {
                id: true,
                name: true,
                cpfOrCnpj: true,
                typePartnerId: true,
                typePartner: true,
            }
        });
    }

    async findAll(page: number, search?: string){      
        const take: number = 5;
        const skip = (page - 1) * take;

        const[partner, total] = await this.prisma.$transaction([

            this.prisma.partner.findMany({
               where: {
                    name: {
                        contains: search
                    }
               },
                orderBy: {
                    id: "desc"
                },        
                select: {
                    id: true,
                    name: true,
                    cpfOrCnpj: true,
                    typePartner: true,
                    contacts: true,                    
                    entries: true,
                    sales: true,                                                                    
                },
                take,
                skip,
            }),
            this.prisma.partner.count(),            
        ])
        const totalPages = Math.ceil(total / take)
        
        return {
            partner,
            total,
            totalPages
        }

    }

    async createPartner(
        {name, cpfOrCnpj, typePartnerId}: PartnerType, 
    ): Promise<PartnerType> {        
        const partner = await this.prisma.partner.create({
            data: {
                name,
                cpfOrCnpj,
                typePartnerId,         
            },
            select: {
                id: true,
                name: true,
                cpfOrCnpj: true,
                typePartnerId: true,
                typePartner: true,  
            }
        });

        return partner;

    }

    async editPartner(id: number, {name, cpfOrCnpj, typePartnerId}: PartnerType): Promise<PartnerType>{
        const part = this.findByPartner(id);
        if(!part){
            console.log("Parceiro não existe");
            return;
        }        
        return await this.prisma.partner.update({
            where: {
                id
            }, 
            data: {
                name,
                cpfOrCnpj,
                typePartnerId,
            }
        })
    }

    async deletePartner(id: number): Promise<PartnerType>{
        return await this.prisma.partner.delete({where: {id}})
    }
}
