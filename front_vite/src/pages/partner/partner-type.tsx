import { FormEvent, useState } from "react";
import { UsePartner } from "./hooks/usePartner";
import { ListPartners } from "./listPartners";
import { UseTypePartner } from "../typePartner/hooks/useTypePartner";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { api } from "@/lib/api";
import { PartnerType as TypePartner } from "./entities/partnerEntity";
import { toast } from "react-toastify";



export function PartnerType(){

    const [name, setName] = useState("");
    const [partnerOfType, setPartnerOfType] = useState<TypePartner[]>([]);

    const {
        typePartner,
        typesPartners,
        findByName,
    } = UseTypePartner();

    findByName(name);
    async function findAllPartnersName(event: FormEvent){
        event.preventDefault();
        try {
            await api.get(`/partner/name/${typePartner?.id}`).then(response => {
                setPartnerOfType(response.data);
            })
        } catch (error) {
            
            toast.error(`Ops; Houve um erro ao buscar parceiros ${typePartner?.name}.`)
        }
    } 
        

    return(
        <div>
            <h1 className="font-semibold text-1xl mb-5">Lista parceiros por tipo</h1>
            <div>   
                <form onSubmit={findAllPartnersName}>
                    <div className="flex gap-4">
                        <select
                            className="w-1/2 h-10 rounded-lg p-2"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            >
                            <option>Escolha uma opção!</option>
                            {
                                typesPartners.map(type => (
                                    <option value={type.name}>{type.name}</option>
                                ))  
                            }
                        </select>

                        <Button type="submit">
                            <Search />
                            Pesquisar
                        </Button>
                    </div>
                </form>
            </div>

            <div className="mt-10">
                <ListPartners partners={partnerOfType}/>
            </div>

        </div>
    )
}