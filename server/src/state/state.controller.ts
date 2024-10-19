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
        return await this.stateService.findAll();
        // if(!result || []){
        //     return ({message: "Nenhum item encontrado!"})
        // }
        // return result;
    }

    @Get("/:id")
    async findById(@Param("id") id: number){
        const result = await this.stateService.findById(Number(id));
        if(!result){
            return ({message: "Registro não encontrado!"})
        }
        return result;
    }

    @Put("/:id")
    async editState(@Param("id") id: number, @Body() {name, uf}: StateType){
        const result = await this.stateService.findById(Number(id));
        if(!result){
            return ({message: "Registro não encontrado!"})
        }else{
            await this.stateService.editState(Number(id), {name, uf});
            return ({message: "Registro alterado!"});
        }
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
