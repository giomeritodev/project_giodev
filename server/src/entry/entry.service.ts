import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { EntryType } from './EntryType';
import { ItemEntryType } from './item-entry/ItemEntryType';
import { PaymentType } from './payment/PaymentType';

@Injectable()
export class EntryService {

    constructor(private prisma: PrismaService){}

    async findAllItensByEntry(entryId: number): Promise<ItemEntryType[]>{
        return await this.prisma.itemEntry.findMany({
            where: {entryId},
            select: {
                id: true,
                entryId: true,
                productId: true,
                product: true,
                amount: true,
                shoppingValue: true,
                entry: true,
            }
        });
    }

    async findAllPaymentsByEntry(id: number): Promise<PaymentType[]>{
        return await this.prisma.payment.findMany({
            where: {
                entryId: id
            },
            select: {
                id: true,
                entryId: true,
                entry: true,
                datePayment: true,
                formOfPayment: true,
                formOfPaymentId: true,
                valuePayment: true,
                statusPaymentId: true,
            }
        })
    }

    async findByEntry(id: number){
        return await this.prisma.entry.findFirst({
            where: {id},
            select: {
                id: true,
                dateEntry: true,
                numberDocument: true,
                partnerId: true,
                status: true,
                statusPaymentId: true,
                partner: true,
                itensEntry: {
                    select:{
                        id: true,
                        amount: true,
                        entry: true,
                        entryId: true,
                        product: true,
                        productId: true,
                    }
                },
                payments: true,
            }
        })
    }

    async createEntry({dateEntry, numberDocument, partnerId, statusId, statusPaymentId}: EntryType): Promise<EntryType>{
        const entry = await this.prisma.entry.create({
            data: {
                dateEntry,
                numberDocument,
                partnerId,
                statusPaymentId,
                statusId,
            },
            select: {
                id: true,
                dateEntry: true,
                numberDocument: true,
                partnerId: true,
                statusId: true,
                status: true,
                statusPaymentId: true,
                statusPayment: {
                    select: {
                        id: true,
                        name: true,
                    }                        
                },
                partner: true,
            }
        })
        return entry;
    }

    async endEntry(id: number, statusId: number): Promise<EntryType>{
        
            return await this.prisma.entry.update({
                where: {
                    id: id
                },
                data: {
                    statusId: statusId
                }
            })
    }

    async findAllEntries(): Promise<EntryType[]>{
        return await this.prisma.entry.findMany({
            select: {
                id: true,
                dateEntry: true,
                numberDocument: true,
                partnerId: true,
                statusId: true,
                status: true,
                statusPaymentId: true,
                statusPayment: {
                    select: {
                        id: true,
                        name: true,
                    }                        
                },
                partner: true,
                payments: true,
            }
        });
    }

    async deleteEntry(id: number){
        return await this.prisma.entry.delete({
            where: {id}
        })
    }

    //Metodos para inclusão de itens da compra

    async addItensEntry({entryId, productId, amount, shoppingValue}: ItemEntryType): Promise<ItemEntryType>{
        return await this.prisma.itemEntry.create({
            data: {
                entryId,
                productId,
                amount,
                shoppingValue
            },
            select: {
                id: true,
                entryId: true,
                productId: true,
                product: true,
                amount: true,
                shoppingValue: true,
                entry: true,
            }
        })
    }
    
    async deleteItemEntry(entryId: number, item: number){
        return await this.prisma.itemEntry.delete({
            where: {
                id: item,
                entryId,
            }
        })
    }


    //Inclusão do pagamento
    async addPayment({entryId, datePayment, formOfPaymentId, valuePayment, statusPaymentId}: PaymentType): Promise<PaymentType>{
        return await this.prisma.payment.create({
            data: {
                entryId,
                datePayment,
                formOfPaymentId,
                valuePayment,
                statusPaymentId,
            }
        })
    }

    async findAllPaymentByEntry(entryId: number): Promise<PaymentType[]>{
        return await this.prisma.payment.findMany({
            where: {
                entryId: entryId
            },
            select: {
                id: true,
                datePayment: true,
                entryId: true,
                entry: true,
                valuePayment: true,
                formOfPaymentId: true,
                formOfPayment: true,
                statusPaymentId: true,
            }
        })
    }

    async deletePayment(entryId: number, item: number){
        return await this.prisma.payment.delete({
            where: {
                id: item,
                entryId,
            }
        })
    }

}
