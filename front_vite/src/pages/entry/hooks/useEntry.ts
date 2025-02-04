import { useEffect, useState } from "react"
import { api } from "@/lib/api";
import { toast } from "react-toastify";
import { EntryType } from "../entities/entreEntity";

export function UseEntry(){

    const [dateEntry, setDateEntry] = useState("");
    const [numberDocument, setNumberDocument] = useState(0);
    const [partnerId, setPartnerId] = useState(0);
    const [status, setStatus] = useState(0);
    const [entries, setEntries] = useState<EntryType[]>([]);
    const [entry, setEntry] = useState<EntryType>();

    async function createEntryHandle(){
        try {
            await api.post("/entry", {dateEntry, numberDocument, partnerId, status}).then(response => (
                console.log(response.data)
            ))
        } catch (error) {
            toast.error("Ops; houve um erro ao finalizar a entrada");
        }
    }
    
    async function findAllEntries(){
        try {
            await api.get("/entry").then(response => {
                return setEntries(response.data);
            })
        } catch (error) {
            toast.error("Ops; houve um erro ao carregar todas as entradas.")
        }
    }

    async function findByEntry(id: number){

        try {
            await api.get(`/entry/${id}`).then(response => {
                return setEntry(response.data);
            })       
        } catch (error) {
            toast.error("Ops; houve um erro ao buscar a entrada selecionada.")
        }
    }

    useEffect(() => {findAllEntries()}, [entries])

    return {
        dateEntry,
        numberDocument,
        partnerId,
        status,
        setDateEntry,
        setNumberDocument,
        setPartnerId,
        setStatus,
        createEntryHandle,  
        entries,
        entry,
        findByEntry,
    }
}