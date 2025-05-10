import { useEffect } from "react";
import { UsePartner } from "./hooks/usePartner"
import {useParams } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UseTypePartner } from "../typePartner/hooks/useTypePartner";
import { Button } from "@/components/ui/button";
import {Plus} from "lucide-react";
import { HookFunctionsUtils } from "@/lib/functionsUtils";
import { Address } from "../addresses";
import { NewAddress } from "../addresses/newAddress";
import { Contact } from "../contacts";
import { NewContact } from "../contacts/newContact";
import { UseContact } from "../contacts/hooks/useContact";
import { HeaderPage } from "@/components/header/header-page";


export function DetailsPartner(){
    const { typesPartners } = UseTypePartner();
    const {partner, findByPartner} = UsePartner();
    const {buttonStatus} = HookFunctionsUtils();
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
            <HeaderPage
                //editInputs={} 
                title="Pagina de detalhes de parceiro"
                url="/parceiros"
            />

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