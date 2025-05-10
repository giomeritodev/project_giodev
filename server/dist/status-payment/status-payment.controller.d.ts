import { StatusPaymentService } from './status-payment.service';
import { StatusPaymentType } from './StatusPaymentType';
export declare class StatusPaymentController {
    private statusPaymentService;
    constructor(statusPaymentService: StatusPaymentService);
    findAllStatusPayments(): Promise<StatusPaymentType[]>;
    createStatusPayment(statusPayment: StatusPaymentType): Promise<StatusPaymentType>;
    deleteFormOfPayment(id: number): Promise<StatusPaymentType>;
    editFormOfPayment(id: number, status: StatusPaymentType): Promise<StatusPaymentType>;
}
