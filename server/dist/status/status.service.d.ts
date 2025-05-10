import { PrismaService } from "src/prisma/prisma.service";
import { StatusType } from "./StatusType";
export declare class StatusService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createStatus({ name }: StatusType): Promise<StatusType>;
    findAllStatus(): Promise<{
        id: number;
        name: string;
    }[]>;
    findById(id: number): Promise<StatusType>;
    editStatus(id: number, status: StatusType): Promise<StatusType>;
    deleteStatus(id: number): Promise<StatusType>;
}
