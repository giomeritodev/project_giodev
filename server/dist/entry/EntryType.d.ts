import { PartnerType } from "src/partner/PartnerType";
import { ItemEntryType } from "./item-entry/ItemEntryType";
export interface EntryType {
    id: number;
    dateEntry: string;
    numberDocument: number;
    partnerId: number;
    status: number;
}
export type EntryTypeProps = {
    id: number;
    dateEntry: string;
    numberDocument: number;
    partnerId: number;
    status: number;
    partner: PartnerType;
    itensEntry: ItemEntryType;
};
