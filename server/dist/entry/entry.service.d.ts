import { PrismaService } from 'src/prisma/prisma.service';
import { EntryType } from './EntryType';
import { ItemEntryType } from './item-entry/ItemEntryType';
import { PaymentType } from './payment/PaymentType';
export declare class EntryService {
    private prisma;
    constructor(prisma: PrismaService);
    findAllItensByEntry(entryId: number): Promise<ItemEntryType[]>;
    findAllPaymentsByEntry(id: number): Promise<PaymentType[]>;
    findByEntry(id: number): Promise<{
        id: number;
        dateEntry: string;
        numberDocument: number;
        partnerId: number;
        statusPaymentId: number;
        status: {
            id: number;
            name: string;
        };
        partner: {
            id: number;
            name: string;
            cpfOrCnpj: string;
            typePartnerId: number;
        };
        itensEntry: {
            entry: {
                id: number;
                dateEntry: string;
                numberDocument: number;
                statusId: number;
                partnerId: number;
                statusPaymentId: number;
                createdAt: Date;
                updatedAt: Date;
            };
            id: number;
            entryId: number;
            productId: number;
            amount: number;
            product: {
                id: number;
                barCode: string;
                reference: string | null;
                name: string;
                costPrice: number;
                price: number;
                amount: number;
                unitId: number;
                categoryId: number;
            };
        }[];
        payments: {
            id: number;
            datePayment: string;
            entryId: number;
            formOfPaymentId: number;
            statusPaymentId: number;
            valuePayment: number;
        }[];
    }>;
    createEntry({ dateEntry, numberDocument, partnerId, statusId, statusPaymentId }: EntryType): Promise<EntryType>;
    endEntry(id: number, statusId: number): Promise<EntryType>;
    findAllEntries(): Promise<EntryType[]>;
    deleteEntry(id: number): Promise<{
        id: number;
        dateEntry: string;
        numberDocument: number;
        statusId: number;
        partnerId: number;
        statusPaymentId: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    addItensEntry({ entryId, productId, amount, shoppingValue }: ItemEntryType): Promise<ItemEntryType>;
    deleteItemEntry(entryId: number, item: number): Promise<{
        id: number;
        entryId: number;
        productId: number;
        amount: number;
        shoppingValue: number;
    }>;
    addPayment({ entryId, datePayment, formOfPaymentId, valuePayment, statusPaymentId }: PaymentType): Promise<PaymentType>;
    findAllPaymentByEntry(entryId: number): Promise<PaymentType[]>;
    deletePayment(entryId: number, item: number): Promise<{
        id: number;
        datePayment: string;
        entryId: number;
        formOfPaymentId: number;
        statusPaymentId: number;
        valuePayment: number;
    }>;
}
