import { FormEvent, useEffect, useState } from "react"
import { StateType } from "../entities/stateEntity"
import { api } from "@/lib/api";
import { toast } from "react-toastify";


export function UseState(){

    const [name, setName] = useState("");
    const [uf, setUf] = useState("");
    const [states, setStates] = useState<StateType[]>([]);

    async function findAllStates(){
        try {
            await api.get("/state").then(response => {
                setStates(response.data);
            })
        } catch (error) {
            toast.error("Ops; Houve um erro ao buscar os dados.")
            return error;
        }
    }

    async function createState(e: FormEvent){
        e.preventDefault()
        try {
            await api.post("/state", {name, uf}).then(response => {
                toast.success("Estado cadastrado com sucesso.");
                return response;
            })
        } catch (error) {
            toast.error("Ops; não foi possivel fazer o cadastro do estado especificado.")
            return error;
        }
    }    

    async function deleteState(id: number){
        try {
            await api.delete(`/state/${id}`).then(response => {
                toast.success("Estado deletado com sucesso.")
                return response;
            })
        } catch (error) {
            toast.error("Ops; não foi possivel deletar o estado.")
        }
    }

    useEffect(() => {findAllStates()}, [states])

    return {
        name,
        setName,
        uf,
        setUf,
        states,
        createState,    
        deleteState,
    }
}