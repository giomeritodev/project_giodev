import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CityType } from './CityType';
import { count } from 'console';

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

    async editCity(id: number, cit: CityType): Promise<CityType>{
        const city = this.findById(id);
        return await this.prisma.city.update({where: {id}, data: {...city, ...cit}})
    }

    async deleteCity(id: number): Promise<CityType>{
        return await this.prisma.city.delete({where: {id}})
    }

    async findCityInState(id: number){

        const [citiesState] = await this.prisma.$transaction([

            this.prisma.city.findMany({
                where: {
                    stateId: id
                },
            }),
            this.prisma.city.count(),            
        ])       

        return {
            citiesState,
        }
    }
}
