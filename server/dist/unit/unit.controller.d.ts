import { UnitService } from './unit.service';
import UnitType from './UnitType';
export declare class UnitController {
    private unitService;
    constructor(unitService: UnitService);
    findAllUnity(): Promise<UnitType[]>;
    findByUnit(id: number): Promise<UnitType>;
    createUnit(unitData: UnitType): Promise<UnitType>;
    deleteUnit(id: number): Promise<UnitType>;
    editUnit(id: number, unit: UnitType): Promise<UnitType>;
}
