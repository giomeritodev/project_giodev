import { useEffect } from "react";
import { UsePartner } from "./hooks/usePartner";
import { ListPartners } from "./listPartners";
import { UseTypePartner } from "../typePartner/hooks/useTypePartner";


export function Employee(){

    const { 
        findAllPartnersName,
        partnerOfType,
    } = UsePartner();

    const {
        typePartner,
        findByName,
    } = UseTypePartner();

    findAllPartnersName(Number(typePartner?.id))    


    useEffect(() => {
        findByName("Funcionario")
    }, [partnerOfType])

    return(
        <div>
            <div>
                <h1>Todos os clientes.</h1>
            </div>

            <div>
                <ListPartners partners={partnerOfType}/>
            </div>

        </div>
    )
}