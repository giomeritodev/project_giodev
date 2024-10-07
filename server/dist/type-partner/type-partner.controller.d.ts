import { TypePartnerService } from './type-partner.service';
export declare class TypePartnerController {
    private readonly typePartnerService;
    constructor(typePartnerService: TypePartnerService);
    createTypePartner(name: string): Promise<import("./TypePartnerType").TypePartnerType>;
}
