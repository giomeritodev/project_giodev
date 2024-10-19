import { PrismaService } from 'src/prisma/prisma.service';
import { CityType } from './CityType';
export declare class CityService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createCity({ name, stateId }: CityType): Promise<CityType>;
    findAll(): Promise<CityType[]>;
    findById(id: number): Promise<CityType>;
    editCity(id: number, { name, stateId }: CityType): Promise<CityType>;
    deleteCity(id: number): Promise<CityType>;
}
