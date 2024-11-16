import { StateType } from './../../../../../server/dist/state/StateType.d';

export interface CityType {
    id?: number;
    name: string;
    state: StateType;
}