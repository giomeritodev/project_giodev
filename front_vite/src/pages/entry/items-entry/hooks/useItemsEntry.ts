import { useState } from "react"
import { api } from "@/lib/api"
import { toast } from "react-toastify"
import { ItemsEntryType } from "../entities/itemsEntryEntity"


export function UseItemsEntry() {

    const [entryId, setEntryId] = useState(0)
    const [productId, setProductId] = useState(0)
    const [amount, setAmount] = useState(0)
    const [shoppingValue, setShoppingValue] = useState(0)
    
    const [items, setItems] = useState<ItemsEntryType[]>([]);
        
    async function newHandleItemEntry(entryId: number){        
        try {
            api.post("/entry/item-entry", {entryId, productId, amount, shoppingValue}).then(response => {
                setItems(response.data);
                toast.success("Item adicionado com sucesso.")
                return response;
            })
        } catch (error) {
            toast.error("Não foi possivel adicionar o item.")
        }
    }

    async function findAllItemsEntry(entryId: number){
        try {
            api.get(`/entry/itens/${entryId}`).then(response => {
                setItems(response.data);
            })
        } catch (error) {
            toast.error("Não foi possivel carregar os itens.")
        }
    }

    async function deleteItem(entryId: number, itemId: number){
        try {
            await api.delete(`/entry/${entryId}/delete/${itemId}`).then(response => {
                toast.success("Item removido da lista")
                return response;
            })
        } catch (error) {
            toast.error("Não foi possivel remover o item.")
        }
    }
    
    return {
        entryId,
        setEntryId,
        productId,
        setProductId,
        amount,
        setAmount,
        shoppingValue,
        setShoppingValue,
        newHandleItemEntry,
        findAllItemsEntry,
        items,
        deleteItem,
    }
}