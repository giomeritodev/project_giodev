import { useEffect } from "react";
import { UsePartner } from "./hooks/usePartner"
import { Link, useParams } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UseTypePartner } from "../typePartner/hooks/useTypePartner";
import { Button } from "@/components/ui/button";
import { Pencil, Plus, Save, Undo2, X } from "lucide-react";
import { HookFunctionsUtils } from "@/lib/functionsUtils";
import { Address } from "../addresses";
import { NewAddress } from "../addresses/newAddress";
import { Contact } from "../contacts";
import { NewContact } from "../contacts/newContact";
import { UseContact } from "../contacts/hooks/useContact";


export function DetailsPartner(){
    const { typesPartners } = UseTypePartner();
    const {partner, findByPartner} = UsePartner();
    const {buttonStatus, statusButton, statusButtonCancel} = HookFunctionsUtils();
    const query = useParams();
    const {
        findAllContactsInPartner
    } = UseContact()

    useEffect(() => {
        findByPartner(Number(query.id))
        findAllContactsInPartner(Number(query.id))
    }, [partner]);
    
    return (
        <div>
            <div className="sm:flex sm:justify-between mb-5">
                <div>
                    <h1>Pagina de detalhes de parceiro.</h1>
                </div>
                <div>
                    <div className="md:flex sm:flex md:justify-between md:gap-4 sm:gap-4">
                        <div>
                            <Button className="w-full mb-2" type="button" onClick={statusButton}>
                                <Pencil /> 
                                Editar
                            </Button>
                        </div>
                        <div>
                            <Button className="w-full mb-2" type="submit" disabled={buttonStatus}>
                                <Save /> 
                                Salvar
                            </Button>
                        </div>
                        <div>
                            <Link to={"/parceiros"}>
                                <Button className="w-full mb-2" type="button">
                                    <Undo2 />
                                    Voltar
                                </Button>
                            </Link>
                        </div>
                        <div>
                            <Button className="w-full mb-2  " disabled={buttonStatus} onClick={statusButtonCancel}>
                                <X />                                 
                                Cancelar
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="">
                    <div className="sm:w-1/2">
                        <Label htmlFor="id">Código</Label>
                        <Input
                            defaultValue={partner?.id}
                            disabled
                        />
                    </div>
                    <div className="sm:w-1/2">
                        <Label htmlFor="name">Nome</Label>
                        <Input
                            defaultValue={partner?.name}
                            disabled={buttonStatus}
                        />
                    </div>
                </div>
                <div>
                    <div className="sm:w-1/2">
                        <Label htmlFor="CPF ou CNPJ">CPF ou CNPJ</Label>
                        <Input
                            defaultValue={partner?.cpfOrCnpj}
                            disabled={buttonStatus}
                        />
                    </div>
                    <div className="sm:w-1/2 mt-2">
                        <Label htmlFor="typePartnerId">Tipo de parceiro</Label>
                        <select
                            disabled={buttonStatus}
                            className="border border-zinc-600 w-full h-10 rounded-lg"
                            defaultValue={partner?.typePartner.id}
                        >
                        <option value={partner?.typePartnerId}>{partner?.typePartner.name}</option>
                        {
                            typesPartners &&
                            typesPartners.map(type => (
                                <option value={type?.id}>{type.name}</option>
                            ))                         
                        }
                        </select>
                    </div>
                </div>
            </div>

            <div className="mt-10 sm:w-auto border border-zinc/10 p-4 rounded-lg">
                <div className="flex justify-between">
                    <div>
                        <h1>Endereço</h1>
                    </div>
                    <div>
                        <NewAddress
                            id={Number(query.id)}
                        >                            
                            <Button>
                                <Plus />
                                Novo
                            </Button>
                        </NewAddress>
                    </div>    
                </div>

                <div>
                    <Address 
                        partnerId={Number(query.id)} 
                    />
                </div>

            </div>

            <div className="mt-10 sm:w-auto border border-zinc/10 p-4 rounded-lg">
                <div className="flex justify-between">
                    <div>
                        <h1>Contatos</h1>
                    </div>
                    <div>
                        <NewContact
                            id={Number(query.id)}
                        >                            
                            <Button>
                                <Plus />
                                Novo
                            </Button>
                            
                        </NewContact>
                    </div>    
                </div>
                
                <div>
                    <Contact 
                        partnerId={Number(query.id)}
                    />
                </div>
            </div>
        </div>
    )
}