import { Link, useParams } from "react-router-dom";
import { UsePartner } from "./hooks/usePartner"
import { useEffect, useState } from "react";
import { LabelVisao } from "../../components/ui/label";
import { InputVisao } from "../../components/ui/input";
import { Button } from "../../components/ui/button/button";
import { HiOutlineReply } from "react-icons/hi";


export function ListPartner(){
    const {
        partner,
        findByPartner,
        address,
    } = UsePartner();

    const query = useParams();
    const [name, setName] = useState(partner?.name)
    const [cpfOrCnpj, setCpfOrCnpj] = useState(partner?.cpfOrCnpj)
    const [fone, setFone] = useState(partner?.fone)
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

                                    <div className="w-1/2">
                                        <LabelVisao>Telefone</LabelVisao>
                                        <InputVisao
                                            defaultValue={partner.fone} 
                                            value={fone}
                                            onChange={(e) => setFone(e.target.value)}
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

            <div className="border border-white/10 p-5 mt-2">
                <span>Endereços</span>

                <div>
                    {
                        address.map(add => (
                            <div className="border border-white/10 p-2">
                                <div className="flex flex-row gap-4">
                                   
                                    <div className="w-1/2">
                                        <LabelVisao>Rua</LabelVisao>
                                        <InputVisao                                             
                                            value={add.public_place}
                                        />                              
                                    </div>
                                    <div className="w-full">
                                        <LabelVisao>Bairro</LabelVisao>
                                        <InputVisao
                                            value={add.sector}
                                        />                                             
                                    </div>
                                </div>
                                <div className="flex flex-row gap-4">
                                   
                                    <div className="w-1/2">
                                        <LabelVisao>Número</LabelVisao>
                                        <InputVisao                                             
                                            value={add.number_address}
                                        />                              
                                    </div>
                                    <div className="w-full">
                                        <LabelVisao>Complemento</LabelVisao>
                                        <InputVisao
                                            value={add.complement}
                                        />                                             
                                    </div>
                                </div>                          
                                <div className="flex flex-row gap-4">
                                   
                                    <div className="w-1/2">
                                        <LabelVisao>Cep</LabelVisao>
                                        <InputVisao                                             
                                            value={add.cep}
                                        />                              
                                    </div>
                                    <div className="w-full">
                                        <LabelVisao>Cidade / UF</LabelVisao>
                                        <InputVisao
                                            value={`${add.city.name} - ${add.city.state.uf}`}
                                        />                                             
                                    </div>
                                </div>      
                            </div>
                        ))
                    }
                </div>    

            </div>
        </div>
    )
}