import { EmptyFile } from "@/components/emptyFile";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pencil, PlusCircle, Save, Trash, X } from "lucide-react";
import { AlertDialogVisao } from "@/components/modal/alertDialog";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import { DialogClose, DialogTitle } from "@radix-ui/react-dialog";
import { ModalEdit } from "@/components/modal/modalEdit";
import { UseState } from "./hooks/useState";


export function States(){
    
    const {
        states,
        createState,
        deleteState,
        name,
        setName,
        uf,
        setUf
    } = UseState();


    return (
        <div>
            <div>
                <Dialog>
                    <DialogTrigger asChild>
                        <div className="sm:flex justify-between">
                            <div>
                                <h1>Pagina de estados</h1>
                            </div>
                            <div>
                                <Button className="w-full">
                                    <PlusCircle  />
                                    Novo estado
                                </Button>
                            </div>
                        </div>    
                    </DialogTrigger>

                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Novo estado</DialogTitle>
                            <DialogDescription>Criar um novo cadastro de estado no sistema</DialogDescription>
                        </DialogHeader>

                            <form
                                onSubmit={(e) => createState(e)}                                
                                className="space-y-6"
                            >       
                                <div className="grid grid-cols-4 items-center text-right gap-3">
                                    <Label htmlFor="name">Estado</Label>
                                    <Input
                                        className="col-span-3"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)} 
                                    />
                                </div>

                                <div className="grid grid-cols-4 items-center text-right gap-3">
                                    <Label htmlFor="name">UF</Label>
                                    <Input
                                        className="col-span-3"
                                        value={uf}
                                        onChange={(e) => setUf(e.target.value)} 
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
                            states.length === 0 ?
                            (
                                <EmptyFile />
                            )
                            :   
                            (                        
                                <Table>
                                    <TableCaption>Lista de todos os estados cadastradas.</TableCaption>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="w-[100px]">Código</TableHead>
                                            <TableHead>Descrição do estado</TableHead>
                                            <TableHead>UF</TableHead>
                                            <TableHead className="text-right">Opções</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {states.map((state) => (
                                        <TableRow key={state.id}>
                                            <TableCell className="font-medium">{state.id}</TableCell>
                                            <TableCell>{state.name}</TableCell>
                                            <TableCell>{state.uf}</TableCell>
                                            <TableCell className="flex justify-end">
                                                    
                                                <AlertDialogVisao 
                                                    id={Number(state.id)} 
                                                    deleteItem={() => deleteState(Number(state.id))}
                                                    item={`${state.name}`}
                                                >                                                    
                                                    <Button size={"sm"} className="bg-zinc-200 hover:bg-zinc-400 mr-2">
                                                        <Trash size={5} color="red" />
                                                    </Button>
                                                    
                                                </AlertDialogVisao>
                                                <ModalEdit
                                                    id={Number(state.id)}
                                                    description={state.name}
                                                    uff={state.uf}
                                                    url="state/edit"
                                                    key={state.id}
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