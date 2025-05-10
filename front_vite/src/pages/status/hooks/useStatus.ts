import { FormEvent, useEffect, useState } from "react"
import { api } from "@/lib/api";
import { toast } from "react-toastify";
import { StatusType } from "../entities/status";


export function UseStatus(){

    const [name, setName] = useState("");
    const [status, setStatus] = useState<StatusType[]>([]);
    const [st, setSt] = useState<StatusType>();
    
    async function handleCreateStatus(event: FormEvent){
        event.preventDefault()
        try {
          await api.post("/status", {name}).then(response => {
            toast.success("Item cadastrado com sucesso.")
            return response;
          })  
        } catch (error) {
            toast.error("Ops; Houve um erro ao cadastrar.")
        }
    }

    async function findAllStatus(){
        try {
            await api.get("/status").then(response => {
                setStatus(response.data);
            })    
        } catch (error) {
            toast.error("Ops; Houve um erro ao buscas os dados.")
        }
    }

   

    async function deleteStatus(id: number){
        try {
            await api.delete(`/status/${id}`).then(response => {
                toast.success("Item deletado com sucesso.");
                return response;
            })
        } catch (error) {
            toast.error("Ops; Houve um problema na deleção do item.")
        }
    }

    async function editStatus(id: number, name: string){
        try {
            await api.put(`/status/edit/${id}`, {name}).then(response => {
                toast.success("Dados alterados com sucesso.")
                console.log(response.data)
                return response.data;
            })
        } catch (error) {
            toast.error("Ops; Houve um erro na alteração dos dados.")
        }
    }

    useEffect(() => {
        findAllStatus()
    }, [status])

    return {
        status,
        st,
        deleteStatus,
        editStatus,
        handleCreateStatus,
        name,
        setName,
    }
}