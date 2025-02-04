import { PrismaService } from 'src/prisma/prisma.service';
import { FormOfPaymentType } from './FormOfPaymentType';
export declare class FormOfPaymentService {
    private prisma;
    constructor(prisma: PrismaService);
    findByFormOfPayment(id: number): Promise<FormOfPaymentType>;
    findAllFormsOfPayments(): Promise<FormOfPaymentType[]>;
    createFormOfPayment({ name }: FormOfPaymentType): Promise<FormOfPaymentType>;
    deleteFormOfPayment(id: number): Promise<FormOfPaymentType>;
    editFormOfPayment(id: number, formOf: FormOfPaymentType): Promise<FormOfPaymentType>;
}
