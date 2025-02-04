import { CityService } from './city.service';
import { CityType } from './CityType';
export declare class CityController {
    private readonly cityService;
    constructor(cityService: CityService);
    createCity({ name, stateId }: CityType): Promise<CityType | {
        message: string;
    }>;
    findAll(): Promise<CityType[]>;
    findBy(id: number): Promise<CityType>;
    updateCity(id: number, cit: CityType): Promise<CityType | {
        message: string;
    }>;
    deleteCity(id: number): Promise<{
        message: string;
    }>;
    findAllCitiesState(stateId: number): Promise<{
        citiesState: {
            id: number;
            name: string;
            stateId: number;
        }[];
    } | {
        message: string;
    }>;
}
