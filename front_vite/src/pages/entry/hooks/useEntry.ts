import { useEffect, useState } from "react"
import { api } from "@/lib/api";
import { toast } from "react-toastify";
import { EntryType } from "../entities/entreEntity";
import { useNavigate } from "react-router-dom";


export function UseEntry(){
    const navigate = useNavigate();

    const [dateEntry, setDateEntry] = useState(`${Date()}`);
    const [numberDocument, setNumberDocument] = useState(0);
    const [partnerId, setPartnerId] = useState(0);
    const [statusId, setStatusId] = useState(0);
    const [statusPaymentId, setStatusPaymentId] = useState(0);
    const [entries, setEntries] = useState<EntryType[]>([]);
    const [entry, setEntry] = useState<EntryType>();
    
    async function createEntryHandle(){
       
        try {
            await api.post("/entry", {dateEntry, numberDocument, partnerId, statusId, statusPaymentId})
            .then(response => {           
                navigate(`/entradas/detalhes/${response.data.id}`)
            })
        } catch (error) {
            toast.error("Ops; houve um erro ao executar a entrada");
            console.log(error)
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

    async function deleteEntry(id: number){
        try {
            await api.delete(`/entry/${id}`).then(response => {
                toast.success("Item deletado com sucesso.")
                return response;
            })
        } catch (error) {
            toast.error("Ops; houve um erro ao deltar o item.")                
        }
    }

    useEffect(() => {findAllEntries()}, [entries])

    return {
        dateEntry,
        numberDocument,
        partnerId,
        statusId,
        statusPaymentId,
        setDateEntry,
        setNumberDocument,
        setPartnerId,
        setStatusId,
        setStatusPaymentId,
        createEntryHandle,  
        entries,
        entry,
        findByEntry,
        deleteEntry,
    }
}