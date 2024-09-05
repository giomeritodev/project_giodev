import { Injectable } from '@nestjs/common';
import { PartnerType } from './PartnerType';
import { PrismaService } from 'src/prisma/prisma.service';
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
                type: true,
                fone: true
            }
        })
    }

    async findAllPartiners(): Promise<PartnerType[]>{
        return await this.prisma.partner.findMany({
            select: {
                id: true,
                name: true,
                cpfOrCnpj: true,
                type: true,
                fone: true
            }
        });
    }

    async createPartner({name, cpfOrCnpj, type, fone}: PartnerType): Promise<PartnerType> {
        return await this.prisma.partner.create({
            data: {
                name,
                cpfOrCnpj,
                type,
                fone
            },
            select: {
                id: true,
                name: true,
                cpfOrCnpj: true,
                type: true,
                fone: true
            }
        })
    }

    async editPartner(id: number, {name, cpfOrCnpj, type, fone}: PartnerType): Promise<PartnerType>{
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
                type,
                fone
            }
        })
    }

    async deletePartner(id: number): Promise<PartnerType>{
        return await this.prisma.partner.delete({where: {id}})
    }
}
