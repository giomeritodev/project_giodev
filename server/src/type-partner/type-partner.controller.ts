import { Body, Controller, Post } from '@nestjs/common';
import { TypePartnerService } from './type-partner.service';

@Controller('type-partner')
export class TypePartnerController {
    constructor(
        private readonly typePartnerService: TypePartnerService
    ){}

    @Post()
    async createTypePartner(@Body() name: string){
        return await this.typePartnerService.createTypePartner({name});
    }
}
