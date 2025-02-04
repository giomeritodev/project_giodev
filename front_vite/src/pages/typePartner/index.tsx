import { EmptyFile } from "@/components/emptyFile";
import { AlertDialogVisao } from "@/components/modal/alertDialog";
import { ModalEdit } from "@/components/modal/modalEdit";
import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { api } from "@/lib/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { DialogDescription, DialogTitle, DialogTrigger } from "@radix-ui/react-dialog";
import { Pencil, PlusCircle, Save, Trash, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as z from "zod";
import { UseTypePartner } from "./hooks/useTypePartner";

const createTypePartnerSchema = z.object({
    name: z.string().min(3, "Favor informar um valor valido.")
})

type CreateTypePartnerSchema = z.infer<typeof createTypePartnerSchema>

export function TypePartner(){

    const {
        typesPartners,
        deleteTypePartner,
        editTypePartner,
    } = UseTypePartner()

    const {register, handleSubmit, formState: {errors}} = useForm<CreateTypePartnerSchema>({
        resolver: zodResolver(createTypePartnerSchema),
        defaultValues: {
            name: ""
        }
    })

    async function handleCreateTypePartner({name}: CreateTypePartnerSchema){
        try {
            await api.post("/type-partner", {name}).then(response => {
                toast.success("Item cadastrado com sucesso.");
                return response;
            })
        } catch (error) {
            toast.error("Ops; Houve um erro no cadastro do item.")
        }
    }


    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <div className="sm:flex justify-between">
                        <div>
                            Tipo de parceiros
                        </div>
                        <div>
                            <Button className="w-full">
                                <PlusCircle />
                                Novo tipo de parceiro
                            </Button>
                        </div>
                    </div>
                </DialogTrigger>

                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Novo tipo de parceiro</DialogTitle>
                        <DialogDescription>Criar um novo cadastro de tipo de parceiro</DialogDescription>
                    </DialogHeader>

                    <form
                        {...createTypePartnerSchema}
                        onSubmit={handleSubmit(handleCreateTypePartner)}
                        className="space-y-6"
                    >

                        <div className="grid grid-cols-4 items-center text-right gap-3">
                            <Label htmlFor="name">Tipo de parceiro</Label>
                            <Input
                                className="col-span-3"
                                {...register("name")}
                                id="name"
                            />
                        </div>

                        <DialogFooter className="gap-2">
                            <DialogClose asChild>
                                <Button type="button" variant="outline">
                                    <X />
                                    Cancelar
                                </Button>
                            </DialogClose>
                                <Button type="submit">
                                    <Save />
                                    Salvar
                                </Button>
                        </DialogFooter>

                    </form>

                </DialogContent>
            </Dialog>

            <div className="mt-6">

                {
                    typesPartners.length === 0 ?
                    (
                        <EmptyFile />
                    )
                    :   
                    (                        
                        <Table>
                            {/* <TableCaption>Lista de todas as unidades cadastradas.</TableCaption> */}
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[100px]">Código</TableHead>
                                    <TableHead>Descrição do tipo de parceiro</TableHead>
                                    <TableHead className="text-right">Opções</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {typesPartners.map((part) => (
                                <TableRow key={part.id}>
                                    <TableCell className="font-medium">{part.id}</TableCell>
                                    <TableCell>{part.name}</TableCell>
                                    <TableCell className="flex justify-end">
                                            
                                        <AlertDialogVisao 
                                            id={Number(part.id)} 
                                            deleteItem={() => deleteTypePartner(Number(part.id))}
                                            item={`${part.name}`}
                                        >                                                    
                                            <Button size={"sm"} className="bg-zinc-200 hover:bg-zinc-400 mr-2">
                                                <Trash size={5} color="red" />
                                            </Button>
                                            
                                        </AlertDialogVisao>
                                        <ModalEdit
                                            url="type-partner/edit"
                                            id={Number(part.id)}
                                            description={`${part.name}`}                                            
                                        >
                                            <Button size={"sm"} className="bg-zinc-200 hover:bg-zinc-400">
                                                <Pencil size={5} color="blue" />
                                            </Button>
                                        </ModalEdit>

                                    </TableCell>
                                </TableRow>
                                ))}
                            </TableBody>                            
                        </Table>
                    )
                }

            </div>
                
        </div>
    )
}