import { ProductType } from "@/pages/products/entities/ProductEntity";
import { EntryType } from "../../entities/entreEntity";

export interface ItemsEntryType {
    id?: number;
    entryId: number;
    productId: number;

    amount: number;
    shoppingValue: number;

    product: ProductType;
    entry: EntryType;
}