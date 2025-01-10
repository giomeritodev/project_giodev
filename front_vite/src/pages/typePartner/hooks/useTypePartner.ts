import { useEffect, useState } from "react"
import { TypePartnerType } from "../entities/typePartnerEntity"
import { api } from "@/lib/api"
import { toast } from "react-toastify"


export function UseTypePartner(){

    const [typesPartners, setTypesPartners] = useState<TypePartnerType[]>([])
    const [typePartner, setTypePartner] = useState<TypePartnerType>();

    async function findAllTypeParner(){
        try {
            await api.get("/type-partner").then(response => {
                setTypesPartners(response.data);
            })
        } catch (error) {
            toast.error("Ops; Houve um erro ao buscar os dados.")
        }
    }

    async function deleteTypePartner(id: number){
        try {
            await api.delete(`/type-partner/${id}`).then(response => {
                toast.success("Item deletado com sucesso")
                return response;
            })
        } catch (error) {
            toast.error("Ops; Houve um erro ao deletar o item.")
        }
    }

    async function editTypePartner(id: number, name: string){
        try {
            await api.put(`/type-partner/ediy/${id}`, {name}).then(response => {
                toast.success("Item alterado com sucesso")
                setTypesPartners(response.data)
                return response;
            })
        } catch (error) {
            toast.error("Ops; Houve um erro ao alterar o item.")
        }
    }



    useEffect(() => {
        findAllTypeParner()
    }, [typesPartners])

    return {
        typesPartners,
        deleteTypePartner,
        editTypePartner,
    }
}