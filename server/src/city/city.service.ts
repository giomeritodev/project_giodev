import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CityType } from './CityType';

@Injectable()
export class CityService {

    constructor(private readonly prisma: PrismaService){}

    async createCity({name, stateId}: CityType): Promise<CityType>{
        return await this.prisma.city.create({data: {name, stateId}})
    }

    async findAll(): Promise<CityType[]>{
        return await this.prisma.city.findMany({
            include: {
                state: true
            }
        });
    }

    async findById(id: number): Promise<CityType>{
        return await this.prisma.city.findFirst({where: {id}, include: {state: true}})
    }

    async editCity(id: number, {name, stateId}: CityType): Promise<CityType>{
        return await this.prisma.city.update({where: {id}, data: {name, stateId}})
    }

    async deleteCity(id: number): Promise<CityType>{
        return await this.prisma.city.delete({where: {id}})
    }
}
