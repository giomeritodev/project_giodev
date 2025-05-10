import { PrismaService } from 'src/prisma/prisma.service';
import { StatusPaymentType } from './StatusPaymentType';
export declare class StatusPaymentService {
    private prisma;
    constructor(prisma: PrismaService);
    findByStatusPayment(id: number): Promise<StatusPaymentType>;
    findAllStatusPayments(): Promise<StatusPaymentType[]>;
    createStatusPayment({ name }: StatusPaymentType): Promise<StatusPaymentType>;
    deleteStatusPayment(id: number): Promise<StatusPaymentType>;
    editStatusPayment(id: number, status: StatusPaymentType): Promise<StatusPaymentType>;
}
