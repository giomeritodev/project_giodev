import { PartnerType } from "./Partner";


export interface TypePartner {
    id?: number;
    name: string;
    partners: PartnerType[];
}