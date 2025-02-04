import { Body, Controller, Delete, Get, Param, Post, Put, Request } from '@nestjs/common';
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
        return result;
    }

    @Get("/:id")
    async findBy(@Param("id") id: number){
        const result = await this.cityService.findById(Number(id));        
        return result;
    }

    @Put("/edit/:id")
    async updateCity(@Param("id") id: number, @Body() cit: CityType){
        const result = await this.cityService.editCity(Number(id), cit);
        if(!result){
            return ({message: "Registro não encontrado!"})
        }
        return result;
    }

    @Delete("/:id")
    async deleteCity(@Param("id") id: number){
        try {
            await this.cityService.deleteCity(Number(id));        
            return ({message: "Deletado com sucesso!"});            
        } catch (error) {
            return ({message: "Erro ao deletar!"})
        }
    }

    @Get("/cities/state/:id")
    async findAllCitiesState(@Param("id") stateId: number){

        try {
            return await this.cityService.findCityInState(Number(stateId))
        } catch (error) {
            return {message: "Houve um erro ao buscar cidades por estado"}
        }
    }
}
