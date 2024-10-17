import { PrismaService } from 'src/prisma/prisma.service';
import UnitType from './UnitType';
export declare class UnitService {
    private prisma;
    constructor(prisma: PrismaService);
    findAllUnits(): Promise<UnitType[]>;
    findAllUnitsPagination(page: number, search?: string): Promise<{
        unities: {
            id: number;
            name: string;
            products: {
                id: number;
                barCode: string;
                reference: string;
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
    findByUnit(id: number): Promise<UnitType>;
    createUnit(data: UnitType): Promise<UnitType>;
    deleteUnit(id: number): Promise<UnitType>;
    editUnit(id: number, unit: UnitType): Promise<UnitType>;
}
