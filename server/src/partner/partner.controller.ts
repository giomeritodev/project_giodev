import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PartnerService } from './partner.service';
import { PartnerType } from './PartnerType';

@Controller('partner')
export class PartnerController {
    constructor(
        private partnerService: PartnerService
    ){}

    @Get("/:id")
    async findByPartner(@Param("id") id: number): Promise<PartnerType>{
        return await this.partnerService.findByPartner(Number(id));
    }

    @Get()
    async findAllPartners(): Promise<PartnerType[]>{
        return await this.partnerService.findAllPartiners();
    }

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
