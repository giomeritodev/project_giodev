import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { api } from "../../../lib/api";
import { toast } from "react-toastify";


export function UsePartner(){
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [cpfOrCnpj, setCpfOrCnpj] = useState("");
    const [typePartnerId, setTypePartnerId] = useState();
    const [fone, setFone] = useState();

    
    async function deletePartner(id: number){
        await api.delete(`/partner/${id}`).then(response => {
            toast.success("Parceiro deletado com sucesso!")
            navigate("/parceiros");
            return response;
        })
    }


    return {
        name,
        setName,
        cpfOrCnpj,
        setCpfOrCnpj,
        typePartnerId,
        setTypePartnerId,
        fone, 
        setFone,
        deletePartner
    }
}