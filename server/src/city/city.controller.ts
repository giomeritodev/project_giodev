import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CityService } from './city.service';
import { CityType } from './CityType';

@Controller('city')
export class CityController {

    constructor(private readonly cityService: CityService){}

    @Post()
    async createCity(@Body() {name, stateId}: CityType){
        const result = await this.cityService.createCity({name, stateId});
        if(!result){
            return ({message: "Registro não foi cadastrado!"})
        }
        return result;
    }

    @Get()
    async findAll(){
        const result = await this.cityService.findAll();
        if(!result || []){
            return ({message: "Nenhum registro encontrado!"})
        }
        return result;
    }

    @Get("/:id")
    async findBy(@Param("id") id: number){
        const result = await this.cityService.findById(id);
        if(!result){
            return ({message: "Registr não encontrado!"})
        }
        return result;
    }

    @Put("/:id")
    async updateCity(@Param("id") id: number, @Body() {name, stateId}: CityType){
        const result = await this.cityService.editCity(Number(id), {name, stateId});
        if(!result){
            return ({message: "Registro não encontrado!"})
        }
        return result;
    }

    @Delete("/:id")
    async deleteCity(@Param("id") id: number){
        const result = await this.cityService.deleteCity(id);
        if(!result){
            return ({message: "Registro não encontrado!"})
        }
        return result;
    }
}
