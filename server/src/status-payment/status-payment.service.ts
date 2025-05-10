import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { StatusPaymentType } from './StatusPaymentType';

@Injectable()
export class StatusPaymentService {

    constructor(
        private prisma: PrismaService
    ){}

    async findByStatusPayment(id: number): Promise<StatusPaymentType>{
        return await this.prisma.statusPayment.findFirst({
            where: {
                id
            }
        })
    }

    async findAllStatusPayments(): Promise<StatusPaymentType[]>{
        return await this.prisma.statusPayment.findMany();
    }

    async createStatusPayment({name}: StatusPaymentType): Promise<StatusPaymentType>{
        return await this.prisma.statusPayment.create({
            data: {
                name
            }
        })
    }

    async deleteStatusPayment(id: number): Promise<StatusPaymentType>{
        return await this.prisma.statusPayment.delete({
            where: {
                id
            }
        })
    }

    async editStatusPayment(id: number, status: StatusPaymentType): Promise<StatusPaymentType>{
        const statusPayment = this.findByStatusPayment(id);
        return await this.prisma.statusPayment.update({
            where: {
                id            
            },
            data: {
                ...statusPayment,
                ...status,
            }
        })
    }
}
