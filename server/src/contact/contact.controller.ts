import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { ContactService } from "./contact.service";
import { ContactType } from "./ContactType";

@Controller('contact')
export class ContactController {

    constructor(
        private readonly contactService: ContactService
    ){}

    @Post()
    async createContact(@Body() contact: ContactType){
        return await this.contactService.createContact(contact);
    }
    
    @Get()
    async findByContact(@Body() id: number){
        return await this.contactService.findByContact(Number(id));
    }

    @Get()
    async findManyContactByPartner(@Body() partnerId: ContactType){
        return await this.contactService.findManyContactByPartner(partnerId)
    }

    @Put("id")
    async updateContact(@Param("id") id: number, @Body() contact: ContactType){
        return await this.contactService.updateContactByParner(Number(id), contact)
    }
}