import { useEffect, useState } from "react"
import { PartnerType } from "../entities/partnerEntity";
import { api } from "@/lib/api";
import { toast } from "react-toastify";


export function UsePartner(){

    const [partners, setPartners] = useState<PartnerType[]>([]);
    const [partner, setPartner] = useState<PartnerType>();

    async function findAllPartners(){
        try {
            await api.get("/partner/all").then(response => {
                setPartners(response.data);
            })
        } catch (error) {
            toast.error(`Ops; Houve um erro ao carregar os dados dos parceiros, provavel erro no banco de dados. ${error}`)
        }
    }

    async function findByPartner(id: number){
        try {
            await api.get(`/partner/${id}`).then(response => {
                setPartner(response.data);                
            })
        } catch (error) {
            toast.error(`Ops; Parceiro com o código "${id}" não encontrado.`);
        }
    }

    

    useEffect(() => {
        findAllPartners()
    }, [partners])

    return {
        partners,
        findByPartner,
        partner,
    }
}