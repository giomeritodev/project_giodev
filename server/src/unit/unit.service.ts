import { Injectable } from '@nestjs/common';
import { Prisma, Unit } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import UnitType from './UnitType';

@Injectable()
export class UnitService {

    constructor(private prisma: PrismaService){}

    async findAllUnits(): Promise<UnitType[]>{
        return await this.prisma.unit.findMany();
    }

    async findByUnit(id: number): Promise<UnitType>{
        return await this.prisma.unit.findUnique({
            where: {id: Number(id)},
            include: {
                products: true,
            }
        })
    }

    async createUnit(data: UnitType): Promise<UnitType>{
        return await this.prisma.unit.create({data});
    }

    async deleteUnit(id: number): Promise<UnitType>{
        return await this.prisma.unit.delete({
            where: {id: Number(id)}
        })
    }

    async editUnit(
        id: number,
        unit: UnitType
    ): Promise<UnitType>{
        const un = this.findByUnit(id);
        return await this.prisma.unit.update({
            where: {id: Number(id)},
            data: {
                ...un,
                ...unit,
            }
        })
    }
}
