import { EntryService } from './entry.service';
import { EntryType } from './EntryType';
import { ItemEntryType } from './item-entry/ItemEntryType';
import { PaymentType } from './payment/PaymentType';
export declare class EntryController {
    private entryService;
    constructor(entryService: EntryService);
    paymentEntry(payment: PaymentType): Promise<PaymentType>;
    findAllPaymentsByEntry(id: number): Promise<PaymentType[]>;
    deletePayment(id: number, item: number): Promise<{
        id: number;
        datePayment: string;
        entryId: number;
        formOfPaymentId: number;
        statusPaymentId: number;
        valuePayment: number;
    }>;
    findAllItensByEntry(id: number): Promise<ItemEntryType[]>;
    findByEntry(id: number): Promise<{
        id: number;
        statusPaymentId: number;
        dateEntry: string;
        numberDocument: number;
        partnerId: number;
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
            id: number;
            entryId: number;
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
    findAllEntries(): Promise<EntryType[]>;
    createEntry(entry: EntryType): Promise<EntryType>;
    addItemEntry(itens: ItemEntryType): Promise<ItemEntryType>;
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
    deleteItemEntry(id: number, item: number): Promise<{
        id: number;
        entryId: number;
        productId: number;
        amount: number;
        shoppingValue: number;
    }>;
    endEntry(id: number, status: number): Promise<EntryType>;
}
