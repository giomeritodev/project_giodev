import { StatusService } from "./status.service";
import { StatusType } from "./StatusType";
export declare class StatusController {
    private readonly statusService;
    constructor(statusService: StatusService);
    createStatus({ name }: StatusType): Promise<StatusType | {
        message: string;
    }>;
    findAll(): Promise<{
        id: number;
        name: string;
    }[]>;
    findById(id: number): Promise<StatusType | {
        message: string;
    }>;
    editStatus(id: number, status: StatusType): Promise<StatusType | {
        message: string;
    }>;
    deleteStatus(id: number): Promise<{
        message: string;
    }>;
}
