import { PartnerType } from "@/pages/partner/entities/partnerEntity";

export interface EntryType{
    id: number;
    dateEntry: string;
    numberDocument: number;
    partnerId: number;
    status: number;
    partner: PartnerType;
}