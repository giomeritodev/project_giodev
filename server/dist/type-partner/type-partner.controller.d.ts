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
    deleteTypePartner(id: number): Promise<TypePartnerType | {
        message: string;
    }>;
    findByTypePartnerName(name: string): Promise<{
        id: number;
        name: string;
    }>;
    editTypePartner(id: number, typ: TypePartnerType): Promise<TypePartnerType>;
}
