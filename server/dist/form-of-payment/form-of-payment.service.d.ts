import { PrismaService } from 'src/prisma/prisma.service';
import { FormOfPaymentType } from './FormOfPaymentType';
export declare class FormOfPaymentService {
    private prisma;
    constructor(prisma: PrismaService);
    findAllFormsOfPayments(): Promise<FormOfPaymentType[]>;
    createFormOfPayment({ name }: FormOfPaymentType): Promise<FormOfPaymentType>;
    deleteFormOfPayment(id: number): Promise<FormOfPaymentType>;
}
