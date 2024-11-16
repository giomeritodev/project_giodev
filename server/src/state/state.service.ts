import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { StateType } from './StateType';

@Injectable()
export class StateService {

    constructor(private readonly prisma: PrismaService){}

    async createState({name, uf}: StateType): Promise<StateType> {
        return await this.prisma.state.create({
            data: {
                name, uf
            }
        })
    }

    async findAllState(){
        return await this.prisma.state.findMany();
    }

    async findById(id: number): Promise<StateType>{
        return await this.prisma.state.findFirst({where: {id: id}})
    }

    async editState(id: number, {name, uf}: StateType): Promise<StateType>{
        return await this.prisma.state.update({where: {id}, data: {name, uf}})
    }

    async deleteState(id: number): Promise<StateType>{
        return await this.prisma.state.delete({where: {id: id}})
    }
}
