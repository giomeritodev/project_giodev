import { PartnerType } from "@/pages/partner/entities/partnerEntity";

export interface EntryType{
    id: number;
    dateEntry: string;
    numberDocument: number;
    partnerId: number;
    statusId: number;
    status: {
        id: number;
        name: string;
    }
    statusPaymentId: number;
    statusPayment: {
        id: number;
        name: string;
    }
    partner: PartnerType;
}