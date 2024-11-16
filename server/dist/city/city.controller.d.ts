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
    updateCity(id: number, { name, stateId }: CityType): Promise<CityType | {
        message: string;
    }>;
    deleteCity(id: number): Promise<{
        message: string;
    }>;
}
