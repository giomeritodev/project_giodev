import { TypePartnerService } from './type-partner.service';
import { TypePartnerType } from './TypePartnerType';
export declare class TypePartnerController {
    private readonly typePartnerService;
    constructor(typePartnerService: TypePartnerService);
    createTypePartner({ name }: TypePartnerType): Promise<TypePartnerType | {
        message: string;
    }>;
    findAll(): Promise<TypePartnerType[] | {
        message: string;
    }>;
}
