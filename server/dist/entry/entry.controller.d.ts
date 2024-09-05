import { EntryService } from './entry.service';
import { EntryType } from './EntryType';
import { ItemEntryType } from './item-entry/ItemEntryType';
import { PaymentType } from './payment/PaymentType';
export declare class EntryController {
    private entryService;
    constructor(entryService: EntryService);
    paymentEntry(payment: PaymentType): Promise<PaymentType>;
    findAllPaymentsByEntry(id: number): Promise<PaymentType[]>;
    findAllItensByEntry(id: number): Promise<ItemEntryType[]>;
    findByEntry(id: number): Promise<{
        partner: {
            id: number;
            name: string;
            cpfOrCnpj: string;
            type: number;
            fone: string;
        };
        id: number;
        itensEntry: {
            product: {
                id: number;
                barCode: string;
                reference: string;
                name: string;
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
        payments: {
            id: number;
            datePayment: string;
            entryId: number;
            formOfPaymentId: number;
            valuePayment: number;
        }[];
        dateEntry: string;
        numberDocument: number;
        partnerId: number;
        status: number;
    }>;
    findAllEntries(): Promise<EntryType[]>;
    createEntry(entry: EntryType): Promise<EntryType>;
    addItemEntry(itens: ItemEntryType): Promise<ItemEntryType>;
    deleteEntry(id: number): Promise<{
        id: number;
        dateEntry: string;
        numberDocument: number;
        partnerId: number;
        status: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    endEntry(id: number, status: number): Promise<EntryType>;
}
