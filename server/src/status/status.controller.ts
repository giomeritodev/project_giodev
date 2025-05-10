import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { StatusService } from "./status.service";
import { StatusType } from "./StatusType";

@Controller('status')
export class StatusController {
    constructor(private readonly statusService: StatusService){}
        
        
        @Post()
        async createStatus(@Body() {name}: StatusType){
            const result = await this.statusService.createStatus({name});
            if(!result){
                return ({message: "Registro não foi criado!!"})
            }
            return result;
        }
        
        @Get()
        async findAll(){
            try {
                const result = await this.statusService.findAllStatus();
                return result;            
            } catch (error) {
                throw new error("Error ao buscar todos os status!")
            }
            
        }
    
        @Get("/:id")
        async findById(@Param("id") id: number){
            const result = await this.statusService.findById(Number(id));
            if(!result){
                return ({message: "Registro não encontrado!"})
            }
            return result;
        }
    
        @Put("/edit/:id")
        async editStatus(@Param("id") id: number, @Body() status: StatusType){
            const result = await this.statusService.editStatus(Number(id), status);
            if(!result){
                return ({message: "Registro não encontrado!"})
            }
            return result;
        }
    
        @Delete("/:id")
        async deleteStatus(@Param("id") id: number){
            const consult = await this.statusService.findById(Number(id));        
            
            if(!consult){
                return ({message: "Registro não encontrado!"})
            }else{
                const result = await this.statusService.deleteStatus(Number(id));
                return ({message: "Registro deletado!"});
            }
        }
}