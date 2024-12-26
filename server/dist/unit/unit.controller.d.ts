import { UnitService } from './unit.service';
import UnitType from './UnitType';
export declare class UnitController {
    private unitService;
    constructor(unitService: UnitService);
    findAllUnityPagination(request: any): Promise<{
        unities: {
            id: number;
            name: string;
            products: {
                id: number;
                barCode: string | null;
                reference: string | null;
                name: string;
                costPrice: number;
                price: number;
                amount: number;
                unitId: number;
                categoryId: number;
            }[];
            sigla: string;
        }[];
        total: number;
        totalPages: number;
    }>;
    findAllUnity(): Promise<UnitType[]>;
    findByUnit(id: number): Promise<UnitType>;
    createUnit(unitData: UnitType): Promise<UnitType>;
    deleteUnit(id: number): Promise<UnitType>;
    editUnit(id: number, unit: UnitType): Promise<UnitType>;
}
