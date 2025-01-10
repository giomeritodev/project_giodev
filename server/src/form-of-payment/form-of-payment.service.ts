import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { FormOfPaymentType } from './FormOfPaymentType';

@Injectable()
export class FormOfPaymentService {

    constructor(
        private prisma: PrismaService
    ){}

    async findAllFormsOfPayments(): Promise<FormOfPaymentType[]>{
        return await this.prisma.formOfPayment.findMany();
    }

    async createFormOfPayment({name}: FormOfPaymentType): Promise<FormOfPaymentType>{
        return await this.prisma.formOfPayment.create({
            data: {
                name
            }
        })
    }

    async deleteFormOfPayment(id: number): Promise<FormOfPaymentType>{
        return await this.prisma.formOfPayment.delete({
            where: {
                id
            }
        })
    }
}
