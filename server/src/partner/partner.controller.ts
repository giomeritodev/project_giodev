import { Body, Controller, Delete, Get, Param, Post, Put, Request } from '@nestjs/common';
import { PartnerService } from './partner.service';
import { PartnerType } from './PartnerType';
import { TypePartnerType } from 'src/type-partner/TypePartnerType';

@Controller('partner')
export class PartnerController {
    constructor(
        private partnerService: PartnerService,       
    ){}

    @Get()
    async findAll(@Request() request){
        const {page, search} = request.query;  
        try {
            return await this.partnerService.findAll(page, search);          
        } catch (error) {
            console.log("Houve um erro na busca")
        }
    }

    @Get("/all")
    async findAllPartners(){
        return await this.partnerService.findAllPartners();
    }

    @Get("/all/name/:name")
    async findAllPartnerName(@Param("name") name: string){
        return await this.partnerService.findAllPartnerName(name);
    }

    @Get("/:id")
    async findByPartner(@Param("id") id: number): Promise<PartnerType>{
        return await this.partnerService.findByPartner(Number(id));
    }

    @Get("/name/:id")
    async findAllPartnersName(@Param("id") id: number): Promise<PartnerType[]>{
        return await this.partnerService.findAllPartnersName(Number(id));
    }

    // @Get()
    // async findAllPartners(): Promise<PartnerType[]>{
    //     return await this.partnerService.findAllPartners();
    // }

    @Post()
    async createPartner(@Body() partner: PartnerType){
        return await this.partnerService.createPartner(partner);
    }   

   
    @Put("edit/:id")
    async editPartner(
        @Param("id") id: number,
        @Body() partner: PartnerType
    ): Promise<PartnerType>{
        return await this.partnerService.editPartner(Number(id), partner);
    }

    @Delete("/:id")
    async deletePartner(@Param("id") id: number): Promise<PartnerType>{
        return await this.partnerService.deletePartner(Number(id));
    }
}
