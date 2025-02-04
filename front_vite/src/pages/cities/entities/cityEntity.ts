export interface CityType {
    id?: number;
    name: string;
    stateId: number;
    state: {
        id?: number;
        name: string;
        uf: string;
    }
}