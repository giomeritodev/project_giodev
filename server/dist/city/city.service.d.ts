import { PrismaService } from 'src/prisma/prisma.service';
import { CityType } from './CityType';
export declare class CityService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createCity({ name, stateId }: CityType): Promise<CityType>;
    findAll(): Promise<CityType[]>;
    findById(id: number): Promise<CityType>;
    editCity(id: number, cit: CityType): Promise<CityType>;
    deleteCity(id: number): Promise<CityType>;
    findCityInState(id: number): Promise<{
        citiesState: {
            id: number;
            name: string;
            stateId: number;
        }[];
    }>;
}
