import { EmptyFile } from "@/components/emptyFile";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pencil, PlusCircle, Save, Trash, X } from "lucide-react";
import { AlertDialogVisao } from "@/components/modal/alertDialog";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import { DialogClose, DialogTitle } from "@radix-ui/react-dialog";
import { UseCity } from "./hooks/useCity";
import { UseState } from "../states/hooks/useState";
import { ModalEdit } from "@/components/modal/modalEdit";


export function Cities(){
    const{
        name,
        setName,
        stateId,
        setStateId,
        createCity,
        cities,
        deleteCity,
    } = UseCity();
    const {states} = UseState()
    

    return (
        <div>
            <div>
                <Dialog>
                    <DialogTrigger asChild>
                        <div className="sm:flex justify-between">
                            <div>
                                <h1>Pagina de cidades</h1>
                            </div>
                            <div>
                                <Button className="w-full">
                                    <PlusCircle  />
                                    Nova cidade
                                </Button>
                            </div>
                        </div>    
                    </DialogTrigger>

                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Nova cidade</DialogTitle>
                            <DialogDescription>Criar um novo cadastro de cidade no sistema</DialogDescription>
                        </DialogHeader>

                            <form
                                onSubmit={(e) => createCity(e)}                                
                                className="space-y-6"
                            >       
                                <div className="grid grid-cols-4 items-center text-right gap-3">
                                    <Label htmlFor="name">Cidade</Label>
                                    <Input
                                        className="col-span-3"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)} 
                                    />
                                </div>

                                <div className="grid grid-cols-4 items-center text-right gap-3">
                                    <Label htmlFor="stateId">Estado</Label>
                                    <select
                                        className="col-span-3 h-10 rounded-lg p-2 border border-zinc-500"
                                        value={stateId}
                                        onChange={(e) => setStateId(Number(e.target.value))}
                                    >
                                        <option>Selecione uma das opções</option>
                                        {
                                            states.map(state => (
                                                <option value={state.id}>{state.name} - {state.uf}</option>
                                            ))
                                        }
                                    </select>
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
                            cities.length === 0 ?
                            (
                                <EmptyFile />
                            )
                            :   
                            (                        
                                <Table>
                                    <TableCaption>Lista de todas as cidades cadastradas.</TableCaption>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="w-[100px]">Código</TableHead>
                                            <TableHead>Descrição da cidade</TableHead>
                                            <TableHead>UF</TableHead>
                                            <TableHead className="text-right">Opções</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {cities.map((city) => (
                                        <TableRow key={city.id}>
                                            <TableCell className="font-medium">{city.id}</TableCell>
                                            <TableCell>{city.name}</TableCell>
                                            <TableCell>{city.state.uf}</TableCell>
                                            <TableCell className="flex justify-end">
                                                    
                                                <AlertDialogVisao 
                                                    id={Number(city.id)} 
                                                    deleteItem={() => deleteCity(Number(city.id))}
                                                    item={`${city.name}`}
                                                >                                                    
                                                    <Button size={"sm"} className="bg-zinc-200 hover:bg-zinc-400 mr-2">
                                                        <Trash size={5} color="red" />
                                                    </Button>
                                                    
                                                </AlertDialogVisao>
                                                <ModalEdit
                                                    id={Number(city.id)}
                                                    description={city.name}
                                                    state={city}
                                                    url="city/edit"
                                                    key={city.id}
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