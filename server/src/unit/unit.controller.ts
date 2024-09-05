import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UnitService } from './unit.service';
import { Unit } from '@prisma/client';
import UnitType from './UnitType';

@Controller('unit')
export class UnitController {

    constructor(private unitService: UnitService){}

    @Get()
    async findAllUnity(): Promise<UnitType[]>{
        return await this.unitService.findAllUnits();
    }

    @Get("/:id")
    async findByUnit(@Param("id") id: number): Promise<UnitType>{
        return await this.unitService.findByUnit(id);
    }

    @Post()
    async createUnit(
        @Body() unitData: UnitType 
    ): Promise<UnitType>{
        return await this.unitService.createUnit(unitData);
    }

    @Delete("/:id")
    async deleteUnit(@Param("id") id: number): Promise<UnitType>{
        return await this.unitService.deleteUnit(id);
    }

    @Put("/:id")
    async editUnit(
        @Param("id") id: number,
        @Body() unit: UnitType
    ): Promise<UnitType>{
        return await this.unitService.editUnit(Number(id), unit);
    }
}
