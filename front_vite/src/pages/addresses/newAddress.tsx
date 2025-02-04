import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ReactNode, useEffect, useState } from "react";
import { UsePartner } from "../partner/hooks/usePartner";
import { api } from "@/lib/api";
import { toast } from "react-toastify";
import { Save } from "lucide-react";

interface AddressProps {
    children: ReactNode,
    id: number,
}

export function NewAddress({children, id}: AddressProps){
    const {partner, findByPartner} = UsePartner();
    
    const [public_place, setPublicPlace] = useState("");
    const [complement, setComplement] = useState("");
    const [number_address, setNumberAddress] = useState(0);
    const [cep, setCep] = useState("");
    const [sector, setSector] = useState("");
    const [partnerId, setPartnerId] = useState(id);
    const [cityId, setCityId] = useState(0);
    
    useEffect(() => {findByPartner(id)}, [partner])

    async function handleAddressCreate(){
        
        console.log(public_place, complement, number_address, cep, sector, partnerId, cityId)
        try {
            await api.post("/address", {public_place, complement, number_address, cep, sector, partnerId, cityId}).then(response => {
                toast.success("Endereço cadastrado com sucesso.")
                return response;
            })
        } catch (error) {
            toast.error("Ops; Houve um erro ao cadastrar o endereço para o parceiro")
        }
    }
    

    return (
        <div>
            <form>
                <Dialog>
                    <DialogTrigger asChild>
                        {children}
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[640px]">
                        <DialogHeader>
                            <DialogTitle>Adicionando edereço</DialogTitle>
                        <DialogDescription>
                            Incluindo um novo endereço para o parceiro.
                        </DialogDescription>
                        </DialogHeader>
                            <div>
                                <Label>Parceiro</Label>
                                <div className="flex gap-4 border border-zinc-600 rounded-lg p-4 bg-zinc-400 font-semibold">
                                    <span>{id}</span>
                                    <span>{partner?.name}</span>
                                </div>
                            </div>
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="public_place" className="text-right">Logradouro</Label>
                                    <Input
                                        className="col-span-3"
                                        value={public_place}
                                        onChange={(e) => setPublicPlace(e.target.value)}
                                    />
                                </div>
                                
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="complement" className="text-right">
                                        Complemento
                                    </Label>
                                    <Input
                                        className="col-span-3"
                                        value={complement}
                                        onChange={(e) => setComplement(e.target.value)}
                                    /> 
                                </div>
                                
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="number_address" className="text-right">
                                        Número
                                    </Label>
                                    <Input
                                        className="col-span-3"
                                        value={number_address}
                                        onChange={(e) => setNumberAddress(Number(e.target.value))}
                                    />
                                </div>
                                
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="cep" className="text-right">
                                        Cep
                                    </Label>
                                    <Input
                                        className="col-span-3"
                                        value={cep}
                                        onChange={(e) => setCep(e.target.value)}
                                    />
                                </div>
                                
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="sector" className="text-right">
                                        Bairro
                                    </Label>
                                    <Input
                                        className="col-span-3"
                                        value={sector}
                                        onChange={(e) => setSector(e.target.value)}
                                    />
                                </div>
                                
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="cityId" className="text-right">
                                        Cidade
                                    </Label>
                                    <select
                                        className="w-[280%] h-10 rounded-lg"     
                                        value={cityId}
                                        onChange={(e) => setCityId(Number(e.target.value))}
                                    >
                                        <option>Selecione uma opção</option>
                                        <option value={1}>{"Luis Eduardo Magalhães-BA"}</option>
                                    </select>
                                </div>
                            </div>
                            <DialogFooter>
                                <Button onClick={() => handleAddressCreate()}>
                                    <Save />
                                    Salvar
                                </Button>
                            </DialogFooter>
                    </DialogContent>
                </Dialog>
            </form>
        </div>
    )
}