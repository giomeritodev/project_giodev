import { FormOfPaymentService } from './form-of-payment.service';
import { FormOfPaymentType } from './FormOfPaymentType';
export declare class FormOfPaymentController {
    private formOfPaymentService;
    constructor(formOfPaymentService: FormOfPaymentService);
    findAllFormsOfPayments(): Promise<FormOfPaymentType[]>;
    createFormOfPayment(formOfPayment: FormOfPaymentType): Promise<FormOfPaymentType>;
    deleteFormOfPayment(id: number): Promise<FormOfPaymentType>;
}
