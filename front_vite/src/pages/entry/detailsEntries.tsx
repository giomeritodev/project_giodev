import { Link, useParams } from "react-router-dom"
import { UseEntry } from "./hooks/useEntry";
import { useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { HookFunctionsUtils } from "@/lib/functionsUtils";
import { UsePartner } from "../partner/hooks/usePartner";
import { StatusEntry } from "./constant/status";
import { Button } from "@/components/ui/button";
import { Pencil, Save, Undo2, X } from "lucide-react";


export function DetailsEntries(){
    const query = useParams();
    const {
        dateEntry,
        numberDocument,
        partnerId,
        status,
        setDateEntry,
        setNumberDocument,
        setPartnerId,
        setStatus,
        entry,
        findByEntry,
    } = UseEntry();
    const {buttonStatus, statusButton, statusButtonCancel} = HookFunctionsUtils();
    const {partners} = UsePartner()

    

    useEffect(() => {findByEntry(Number(query.id))}, [entry])

    return (
        <div>
            <div className="sm:flex justify-between">
                <div>
                    <h1>Pagina de detalhes das entradas</h1>
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
                            <Link to={"/produtos"}>
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
                <div>
                    <div>
                        <Label htmlFor="id">Código</Label>
                        <Input 
                            id="id"
                            disabled
                            defaultValue={entry?.id}
                        />
                    </div>
                    <div>
                        <Label htmlFor="dateEntry">Data da entrada</Label>
                        <Input 
                            disabled={buttonStatus}
                            defaultValue={entry?.dateEntry}
                            //value={name}
                            onChange={(e) => setDateEntry(e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <Label htmlFor="numberDocument">Número documento</Label>
                        <Input
                            disabled={buttonStatus}
                            defaultValue={entry?.numberDocument}
                            //value={barCode}
                            onChange={(e) => setNumberDocument(Number(e.target.value))}
                        />
                    </div>                    
                </div>                
                
                <div className="sm:flex gap-4 justify-normal mb-4">
                    <div className="sm:w-1/2 mb-4">
                        <Label htmlFor="partnerId">Fornecedor</Label>
                        <select
                            disabled={buttonStatus}
                            className="w-full h-10 rounded-lg"
                            id="partnerId"
                            defaultValue={entry?.partnerId}
                            //value={unitId}
                            onChange={(e) => setPartnerId(Number(e.target.value))}
                        >                                
                            <option value={entry?.partnerId}>{entry?.partner.name}</option>
                            {
                                partners.map(part => (
                                    <option value={part.id}>{part.name}</option>
                                ))
                            }        
                        </select>
                        
                    </div>
                    <div className="sm:w-1/2">
                        <Label htmlFor="status">Status</Label>
                        <select
                            disabled={buttonStatus}
                            className="w-full h-10 rounded-lg"
                            id="status"
                            defaultValue={entry?.status}
                            //value={categoryId}
                            onChange={(e) => setStatus(Number(e.target.value))}
                        >
                            <option value={entry?.status}>{entry?.status}</option>
                            <option value={status}>{StatusEntry.PENDENTE}</option>                             
                            <option value={status}>{StatusEntry.PROGRAMADO}</option>                             
                            <option value={status}>{StatusEntry.PAGO}</option>                             
                            <option value={status}>{StatusEntry.VENCIDO}</option>                             
                            <option value={status}>{StatusEntry.CANCELADO}</option>                             
                        </select>
                        
                    </div>
                </div>
            </div>
        </div>

    )
}