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
        partner: {
            id: number;
            name: string;
            cpfOrCnpj: string;
            typePartnerId: number;
        };
        id: number;
        itensEntry: {
            product: {
                id: number;
                barCode: string | null;
                reference: string | null;
                name: string;
                costPrice: number;
                price: number;
                amount: number;
                unitId: number;
                categoryId: number;
            };
            entry: {
                id: number;
                dateEntry: string;
                numberDocument: number;
                partnerId: number;
                status: number;
                createdAt: Date;
                updatedAt: Date;
            };
            id: number;
            amount: number;
            entryId: number;
            productId: number;
        }[];
        partnerId: number;
        payments: {
            id: number;
            datePayment: string;
            entryId: number;
            formOfPaymentId: number;
            valuePayment: number;
        }[];
        dateEntry: string;
        numberDocument: number;
        status: number;
    }>;
    createEntry({ dateEntry, numberDocument, partnerId, status }: {
        dateEntry: any;
        numberDocument: any;
        partnerId: any;
        status: any;
    }): Promise<EntryType>;
    endEntry(id: number, status: number): Promise<EntryType>;
    findAllEntries(): Promise<EntryType[]>;
    deleteEntry(id: number): Promise<{
        id: number;
        dateEntry: string;
        numberDocument: number;
        partnerId: number;
        status: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    addItensEntry({ entryId, productId, amount, shoppingValue }: ItemEntryType): Promise<ItemEntryType>;
    addPayment({ entryId, datePayment, formOfPaymentId, valuePayment }: PaymentType): Promise<PaymentType>;
    findAllPaymentByEntry(entryId: number): Promise<PaymentType[]>;
}
