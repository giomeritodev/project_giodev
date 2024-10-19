import { PrismaService } from 'src/prisma/prisma.service';
import { StateType } from './StateType';
export declare class StateService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createState({ name, uf }: StateType): Promise<StateType>;
    findAll(): Promise<StateType[]>;
    findById(id: number): Promise<StateType>;
    editState(id: number, { name, uf }: StateType): Promise<StateType>;
    deleteState(id: number): Promise<StateType>;
}
