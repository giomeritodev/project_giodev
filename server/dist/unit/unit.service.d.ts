import { PrismaService } from 'src/prisma/prisma.service';
import UnitType from './UnitType';
export declare class UnitService {
    private prisma;
    constructor(prisma: PrismaService);
    findAllUnits(): Promise<UnitType[]>;
    findByUnit(id: number): Promise<UnitType>;
    createUnit(data: UnitType): Promise<UnitType>;
    deleteUnit(id: number): Promise<UnitType>;
    editUnit(id: number, unit: UnitType): Promise<UnitType>;
}
