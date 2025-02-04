import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { Pencil, PlusCircle, Save, Trash, X } from "lucide-react";
import { useForm } from "react-hook-form";
import {z} from "zod";
import { UseUnit } from "./hooks/useUnit";
import { EmptyFile } from "@/components/emptyFile";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { api } from "@/lib/api";
import { toast } from "react-toastify";
import { AlertDialogVisao } from "@/components/modal/alertDialog";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ModalEdit } from "@/components/modal/modalEdit";


const createUnitySchema = z.object({
    name: z.string().min(3, "Favor informar um valor valido."),
    sigla: z.string().min(2, "Minimo 2 caracteres").max(2, "Informe um valor valido."),
})

type CreateUnitySchema = z.infer<typeof createUnitySchema>

export function Unities(){

    const {unities, deleteUnit} = UseUnit()

    const { register, handleSubmit, formState: {errors} } = useForm<CreateUnitySchema>({
        resolver: zodResolver(createUnitySchema),
        defaultValues: {
            name: "",
            sigla: "",  
        }
    })

    async function handleCreateUnity({name, sigla}: CreateUnitySchema){
        try {
          await api.post("/unit", {name, sigla}).then(response => {
            toast.success("Item cadastrado com sucesso.")      
            return response;  
          })  
        } catch (error) {
            toast.error("Ops; Houve um erro no cadastro.")
        }
    }

    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <div className="flex justify-between">
                        <div>
                            <h1>Pagina de unidade de medidas</h1>
                        </div>
                        <div>
                            <Button>
                                <PlusCircle />
                                Nova unidade
                            </Button>
                        </div>                        
                    </div>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Nova unidade de medida</DialogTitle>
                        <DialogDescription>Criar um novo cadastro de unidade de medida</DialogDescription>
                    </DialogHeader>

                    <form 
                        {...createUnitySchema} 
                        onSubmit={handleSubmit(handleCreateUnity)}
                        className="space-y-6"
                    >
                        
                        <div className="grid grid-cols-4 items-center text-right gap-3">

                                <Label htmlFor="name">Unidade</Label>
                                <Input
                                    className="col-span-3"
                                    id="name" 
                                    {...register("name")}
                                />
                                {errors.name && <p className="text-red-600">{errors.name.message}</p>}
                            
                            
                                <Label htmlFor="sigla">Sigla</Label>
                                <Input 
                                    className="col-span-3"
                                    id="sigla"
                                    {...register("sigla")}
                                />
                                {errors.sigla && <p className="text-red-600">{errors.sigla.message}</p>}
                            
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
                    unities.length === 0 ?
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
                                    <TableHead>Descrição da unidade</TableHead>
                                    <TableHead>Sigla</TableHead>
                                    <TableHead className="text-right">Opções</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {unities.map((unit) => (
                                <TableRow key={unit.id}>
                                    <TableCell className="font-medium">{unit.id}</TableCell>
                                    <TableCell>{unit.name}</TableCell>
                                    <TableCell>{unit.sigla}</TableCell>
                                    <TableCell className="flex justify-end">
                                        
                                        <AlertDialogVisao
                                            id={Number(unit.id)}
                                            deleteItem={() => deleteUnit(Number(unit.id))}
                                            item={`${unit.name} - ${unit.sigla}`} 
                                        >

                                            <Button size={"sm"} className="bg-zinc-200 hover:bg-zinc-400 mr-2">
                                                <Trash size={5} color="red" />
                                            </Button>
                                        </AlertDialogVisao>
                                        <ModalEdit
                                            url="unit"
                                            id={Number(unit.id)}
                                            description={unit.name}
                                            un={unit.sigla}
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
    )
}