import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TypePartnerService } from './type-partner.service';
import { TypePartnerType } from './TypePartnerType';

@Controller('type-partner')
export class TypePartnerController {
    constructor(
        private readonly typePartnerService: TypePartnerService
    ){}

    @Post()
    async createTypePartner(@Body() {name}: TypePartnerType){
        try {
            return await this.typePartnerService.createTypePartner({name});            
        } catch (error) {
            return ({message: "Ops, houve um erro ao cadastrar!"})            
        }
    }

    @Get()
    async findAll(){
        try {
            return await this.typePartnerService.findAllTypePartner();
        } catch (error) {
            return ({message: "Houve um erro ao consultar todos!"})
        }
    }

    @Delete("/:id")
    async deleteTypePartner(@Param("id") id: number){
        try {
            return await this.typePartnerService.deleteTypePartner(Number(id));
        } catch (error) {
            return ({message: "Houve um erro ao deletar o tipo de pagamento!"})
        }
    }
}
