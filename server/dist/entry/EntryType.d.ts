import { PartnerType } from "src/partner/PartnerType";
import { ItemEntryType } from "./item-entry/ItemEntryType";
export interface EntryType {
    id?: number;
    dateEntry: string;
    numberDocument: number;
    partnerId: number;
    statusPaymentId: number;
    statusId: number;
}
export type EntryTypeProps = {
    id?: number;
    dateEntry: string;
    numberDocument: number;
    partnerId: number;
    statusPaymentId: number;
    partner: PartnerType;
    itensEntry: ItemEntryType;
};
