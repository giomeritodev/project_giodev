import { useEffect, useState } from "react"
import { UnityType } from "../entities/unityEntity"
import { api } from "@/lib/api"
import { toast } from "react-toastify"


export function UseUnit(){

    const [unities, setUnities] = useState<UnityType[]>([])


    async function findAllUnities(){
        try {
            await api.get("/unit/all").then(response => {
                setUnities(response.data);
            })
        } catch (error) {
            toast.error("Ops; Houve um erro ao consultar os itens.")   
        }
    }

    async function deleteUnit(id: number){
        try {
            await api.delete(`/unit/${id}`).then(response => {
                toast.success("Item deletado com sucesso.")
                return response;
            })
        } catch (error) {
            toast.error("Ops; houve um erro ao deletar o item.")
        }
    }

    useEffect(() => {
        findAllUnities()
    }, [unities])

    return{
        unities,
        deleteUnit,
    }
}