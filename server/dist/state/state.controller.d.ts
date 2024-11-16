import { StateService } from './state.service';
import { StateType } from './StateType';
export declare class StateController {
    private readonly stateService;
    constructor(stateService: StateService);
    createState({ name, uf }: StateType): Promise<StateType | {
        message: string;
    }>;
    findAll(): Promise<{
        id: number;
        name: string;
        uf: string;
    }[]>;
    findById(id: number): Promise<StateType | {
        message: string;
    }>;
    editState(id: number, { name, uf }: StateType): Promise<{
        message: string;
    }>;
    deleteState(id: number): Promise<{
        message: string;
    }>;
}
