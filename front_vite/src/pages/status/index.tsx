import { EmptyFile } from "@/components/emptyFile";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pencil, PlusCircle, Save, Trash, X } from "lucide-react";
import { AlertDialogVisao } from "@/components/modal/alertDialog";
import { ModalEdit } from "@/components/modal/modalEdit";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import { DialogClose, DialogTitle } from "@radix-ui/react-dialog";
import { UseStatus } from "./hooks/useStatus";

export function Status(){


    const {
        status,
        st,
        editStatus,
        deleteStatus,
        handleCreateStatus,
        name,
        setName,
    } = UseStatus();    
    

    return (
        <div>
            <div>
                <Dialog>
                    <DialogTrigger asChild>
                        <div className="flex justify-between">
                            <div>
                                <h1>Pagina de status</h1>
                            </div>
                            <div>
                                <Button>
                                    <PlusCircle  />
                                    Novo status
                                </Button>
                            </div>
                        </div>    
                    </DialogTrigger>

                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Novo status</DialogTitle>
                            <DialogDescription>Criar um novo cadastro de status no sistema</DialogDescription>
                        </DialogHeader>

                            <form 
                                onSubmit={(e) => handleCreateStatus(e)}
                                className="space-y-6"
                            >       
                                <div className="grid grid-cols-4 items-center text-right gap-3">
                                    <Label htmlFor="name">Status</Label>
                                    <Input
                                        className="col-span-3"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)} 
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
                            status.length === 0 ?
                            (
                                <EmptyFile />
                            )
                            :   
                            (                        
                                <Table>
                                    <TableCaption>Lista de todas as unidades cadastradas.</TableCaption>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="w-[100px]">Código</TableHead>
                                            <TableHead>Descrição do status de pagamento</TableHead>
                                            <TableHead className="text-right">Opções</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {status.map((st) => (
                                        <TableRow key={st.id}>
                                            <TableCell className="font-medium">{st.id}</TableCell>
                                            <TableCell>{st.name}</TableCell>
                                            <TableCell className="flex justify-end">
                                                    
                                                <AlertDialogVisao 
                                                    id={Number(st.id)} 
                                                    deleteItem={() => deleteStatus(Number(st.id))}
                                                    item={`${st.name}`}
                                                >                                                    
                                                    <Button size={"sm"} className="bg-zinc-200 hover:bg-zinc-400 mr-2">
                                                        <Trash size={5} color="red" />
                                                    </Button>
                                                    
                                                </AlertDialogVisao>
                                                <ModalEdit
                                                    url="status-/edit"
                                                    id={Number(st.id)}
                                                    description={`${st.name}`}
                                                    // saveData={() => editCategory(Number(cat.id), cat.name)}
                                                >
                                                    <Button size={"sm"} className="bg-zinc-200 hover:bg-zinc-400">
                                                        <Pencil size={5} color="blue" />
                                                    </Button>
                                                </ModalEdit>

                                            </TableCell>
                                        </TableRow>
                                        ))}
                                    </TableBody>
                                    <TableFooter>
                                        <TableRow>
                                        {/* <TableCell colSpan={3}>Total</TableCell>
                                        <TableCell className="text-right">$2,500.00</TableCell> */}
                                        </TableRow>
                                    </TableFooter>
                                </Table>
                            )
                        }

                    </div>
                
            </div>
                        
        
        </div>
    )
}