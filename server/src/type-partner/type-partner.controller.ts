import { Body, Controller, Get, Post } from '@nestjs/common';
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
            return await this.typePartnerService.findAllTypeParner();
        } catch (error) {
            return ({message: "Houve um erro ao consultar todos!"})
        }
    }
}
