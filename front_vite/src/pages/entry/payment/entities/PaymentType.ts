import { FormOfPaymentType } from "@/pages/formOfPayment/entities/formOfPaymentEntity";
import { EntryType } from "../../entities/entreEntity";
import { StatusPaymentType } from "@/pages/statusPayment/entities/statusPaymentEntity";


export interface PaymentType {
    id?: number;
    datePayment: string;
    entryId: number;
    formOfPaymentId: number;
    statusPaymentId: number;
    valuePayment: number;

    entry?: EntryType;
    formOfPayment?: FormOfPaymentType;
    statusPayment?: StatusPaymentType;

}