import { useEffect } from "react";
import { UsePartner } from "./hooks/usePartner";
import { ListPartners } from "./listPartners";
import { UseTypePartner } from "../typePartner/hooks/useTypePartner";


export function Supplier(){

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
        findByName("Fornecedor")
    }, [partnerOfType])

    return(
        <div>
            <div>
                <h1>Todos os fornecedores.</h1>
            </div>

            <div>
                <ListPartners partners={partnerOfType}/>
            </div>

        </div>
    )
}