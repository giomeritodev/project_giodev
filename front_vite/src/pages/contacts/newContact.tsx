import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ReactNode, useEffect } from "react";
import { UsePartner } from "../partner/hooks/usePartner";
import { api } from "@/lib/api";
import { toast } from "react-toastify";
import { Save } from "lucide-react";
import { UseContact } from "./hooks/useContact";

interface ContactProps {
    children: ReactNode,
    id: number,
}

export function NewContact({children, id}: ContactProps){
    const {partner, findByPartner} = UsePartner();
    const {
        fone, email, name, position,
        setFone, setEmail, setName, setPosition,
    } = UseContact()
    
    useEffect(() => {findByPartner(id)}, [partner])

    async function handleAddressCreate(){        
        try {
            await api.post("/contact", {fone, email, name, position, partnerId: id}).then(response => {
                toast.success("Contato cadastrado com sucesso.")
                return response;
            })
        } catch (error) {
            toast.error("Ops; Houve um erro ao cadastrar o contato para o parceiro")
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
                            <DialogTitle>Adicionando contato</DialogTitle>
                        <DialogDescription>
                            Incluindo um novo contato para o parceiro.
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
                                    <Label htmlFor="fone" className="text-right">Telefone</Label>
                                    <Input
                                        className="col-span-3"
                                        value={fone}
                                        onChange={(e) => setFone(e.target.value)}
                                    />
                                </div>
                                
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="email" className="text-right">
                                        Email
                                    </Label>
                                    <Input
                                        className="col-span-3"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    /> 
                                </div>
                                
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="name" className="text-right">
                                        Nome
                                    </Label>
                                    <Input
                                        className="col-span-3"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="position" className="text-right">
                                        Cargo
                                    </Label>
                                    <Input
                                        className="col-span-3"
                                        value={position}
                                        onChange={(e) => setPosition(e.target.value)}
                                    />
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