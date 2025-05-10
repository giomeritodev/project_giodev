import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { StatusType } from "./StatusType";


@Injectable()
export class StatusService {

    constructor(private readonly prisma: PrismaService){}
    
        async createStatus({name}: StatusType): Promise<StatusType> {
            return await this.prisma.status.create({
                data: {
                    name
                }
            })
        }
    
        async findAllStatus(){
            return await this.prisma.status.findMany();
        }
    
        async findById(id: number): Promise<StatusType>{
            return await this.prisma.status.findFirst({where: {id: id}})
        }
    
        async editStatus(id: number, status: StatusType): Promise<StatusType>{
            const st = this.findById(id);
            return await this.prisma.status.update({where: {id}, data: {...st, ...status}})
        }
    
        async deleteStatus(id: number): Promise<StatusType>{
            return await this.prisma.status.delete({where: {id: id}})
        }
}