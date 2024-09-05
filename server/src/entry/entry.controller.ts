import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { EntryService } from './entry.service';
import { EntryType } from './EntryType';
import { ItemEntryType } from './item-entry/ItemEntryType';
import { PaymentType } from './payment/PaymentType';

@Controller('entry')
export class EntryController {

    constructor(private entryService: EntryService){}

    @Post("/payment")
    async paymentEntry(@Body() payment: PaymentType): Promise<PaymentType>{
        return await this.entryService.addPayment(payment);
    }

    @Get("/payment/:entryId")
    async findAllPaymentsByEntry(@Param("entryId") id: number): Promise<PaymentType[]>{
        return await this.entryService.findAllPaymentsByEntry(Number(id));
    }

    @Get("/itens/:entryId")
    async findAllItensByEntry(@Param("entryId") id: number): Promise<ItemEntryType[]>{
        return await this.entryService.findAllItensByEntry(Number(id));
    }

    @Get("/:id")
    async findByEntry(@Param("id") id: number){
        return await this.entryService.findByEntry(Number(id));
    } 

    @Get()
    async findAllEntries(): Promise<EntryType[]>{
        return await this.entryService.findAllEntries();
    }

    @Post()
    async createEntry(@Body() entry: EntryType): Promise<EntryType>{
        return await this.entryService.createEntry(entry)
    }

    @Post("/item-entry")
    async addItemEntry(@Body() itens: ItemEntryType): Promise<ItemEntryType>{
        return await this.entryService.addItensEntry(itens);
    }

    @Delete(":id")
    async deleteEntry(@Param("id") id: number){
        return await this.entryService.deleteEntry(Number(id));
    }

    @Patch(":id")
    async endEntry(@Param("id") id: number, @Body() status: number): Promise<EntryType>{
        return await this.entryService.endEntry(Number(id), Number(status));
    }
}
