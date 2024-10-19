import { CityService } from './city.service';
import { CityType } from './CityType';
export declare class CityController {
    private readonly cityService;
    constructor(cityService: CityService);
    createCity({ name, stateId }: CityType): Promise<CityType | {
        message: string;
    }>;
    findAll(): Promise<CityType[] | {
        message: string;
    }>;
    findBy(id: number): Promise<CityType | {
        message: string;
    }>;
    updateCity(id: number, { name, stateId }: CityType): Promise<CityType | {
        message: string;
    }>;
    deleteCity(id: number): Promise<CityType | {
        message: string;
    }>;
}
