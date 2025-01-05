import { Link, useParams } from "react-router-dom";
import { UsePartner } from "./hooks/usePartner"
import { useEffect, useState } from "react";
import { LabelVisao } from "../../components/ui/label";
import { InputVisao } from "../../components/ui/input";
import { Button } from "../../components/ui/button/button";
import { HiOutlineReply } from "react-icons/hi";
import { ListAddress } from "./list_addresses";
import { AddressModal } from "./modal/address.modal";
import { boolean } from "zod";


export function ListPartner(){
    const {
        partner,
        findByPartner,
    } = UsePartner();

    const query = useParams();
    const [name, setName] = useState(partner?.name)
    const [cpfOrCnpj, setCpfOrCnpj] = useState(partner?.cpfOrCnpj)
    const [typePartnerId, setTypePartnerId] = useState(partner?.typeParnerId)
   

    useEffect(() => {
        findByPartner(Number(query.id));
    }, [partner])

   

    return (
        <div className="flex flex-col">
            <div className="flex justify-between border border-white/10 rounded-lg p-5 mb-5">
                <span className="text-xl">Detalhes do parceiro</span>
                <div>
                    <Link to={"/parceiros"}>
                        <Button variant="secondary">
                            Voltar
                            <HiOutlineReply />
                        </Button>
                    </Link>
                </div>
            </div>    

            <div className="border border-white/10 rounded-lg p-5">
                <form action="">
                    {
                        partner ? (
                            <div>
                                <div className="flex flex-row gap-4">
                                    <div className="w-1/1">
                                        <LabelVisao>Código</LabelVisao>
                                        <InputVisao
                                            disabled 
                                            value={partner.id}
                                        />                              
                                    </div>

                                    <div className="w-full">
                                        <LabelVisao>Parceiro</LabelVisao>
                                        <InputVisao
                                            defaultValue={partner.name} 
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />                              
                                    </div>
                                </div>

                                <div className="flex flex-row gap-4">
                                    <div className="w-1/2">
                                        <LabelVisao>CPF ou CNPJ</LabelVisao>
                                        <InputVisao
                                            defaultValue={partner.cpfOrCnpj} 
                                            value={cpfOrCnpj}
                                            onChange={(e) => setCpfOrCnpj(e.target.value)}
                                        />                              
                                    </div>

                                    
                                    <div className="w-full">
                                        <LabelVisao>Tipo do parceiro</LabelVisao>
                                        <InputVisao
                                            defaultValue={partner.typePartner.name} 
                                            value={typePartnerId}
                                            onChange={(e) => setTypePartnerId(Number(e.target.value))}
                                        />                                             
                                    </div>
                                </div>                                
                                
                            </div>
                        ) : (
                            <div className="p-5 bg-zinc-400 rounded-lg">
                                <span>Nenhum dado encontrado!</span>    
                            </div>
                        )
                    }
                </form>
            </div>    

            <div className="border border-white/10 p-5 mt-2 rounded-lg">
                <ListAddress partnerId={Number(query.id)} />
            </div>
            
        </div>
    )
}