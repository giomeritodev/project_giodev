import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { StateService } from './state.service';
import { StateType } from './StateType';

@Controller('state')
export class StateController {

    constructor(private readonly stateService: StateService){}
    
    
    @Post()
    async createState(@Body() {name, uf}: StateType){
        const result = await this.stateService.createState({name, uf});
        if(!result){
            return ({message: "Registro não foi criado!!"})
        }
        return result;
    }
    
    @Get()
    async findAll(){
        try {
            const result = await this.stateService.findAllState();
            return result;            
        } catch (error) {
            throw new error("Error ao buscar todos os estados brasileiros!")
        }
        
    }

    @Get("/:id")
    async findById(@Param("id") id: number){
        const result = await this.stateService.findById(Number(id));
        if(!result){
            return ({message: "Registro não encontrado!"})
        }
        return result;
    }

    @Put("/edit/:id")
    async editState(@Param("id") id: number, @Body() state: StateType){
        const result = await this.stateService.editState(Number(id), state);
        if(!result){
            return ({message: "Registro não encontrado!"})
        }
        return result;
    }

    @Delete("/:id")
    async deleteState(@Param("id") id: number){
        const consult = await this.stateService.findById(Number(id));        
        
        if(!consult){
            return ({message: "Registro não encontrado!"})
        }else{
            const result = await this.stateService.deleteState(Number(id));
            return ({message: "Registro deletado!"});
        }
    }
}
