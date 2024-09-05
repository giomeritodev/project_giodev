import { PartnerService } from './partner.service';
import { PartnerType } from './PartnerType';
export declare class PartnerController {
    private partnerService;
    constructor(partnerService: PartnerService);
    findByPartner(id: number): Promise<PartnerType>;
    findAllPartners(): Promise<PartnerType[]>;
    createPartner(partner: PartnerType): Promise<PartnerType>;
    editPartner(id: number, partner: PartnerType): Promise<PartnerType>;
    deletePartner(id: number): Promise<PartnerType>;
}
