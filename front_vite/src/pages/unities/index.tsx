import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { List, Pencil, Save, Trash } from "lucide-react";
import { useForm } from "react-hook-form";
import {z} from "zod";
import { UseUnit } from "./hooks/useUnit";
import { EmptyFile } from "@/components/emptyFile";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Link } from "react-router-dom";
import { api } from "@/lib/api";
import { toast } from "react-toastify";

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

            <form {...createUnitySchema} onSubmit={handleSubmit(handleCreateUnity)}>
                <div className="flex justify-between">
                    <div>
                        <h1>Pagina de unidade de medidas</h1>
                    </div>
                    <div>
                        <Button>
                            <Save />
                            Salvar
                        </Button>
                    </div>
                    
                </div>
                <div className="sm:flex gap-4">
                    <div className="sm:w-1/2">
                        <Label>Descrição do item</Label>
                        <Input 
                            {...register("name")}
                        />
                        {errors.name && <p className="text-red-600">{errors.name.message}</p>}
                    </div>
                    <div className="sm:w-1/4">
                        <Label>Sigla da unidade</Label>
                        <Input 
                            {...register("sigla")}
                        />
                        {errors.sigla && <p className="text-red-600">{errors.sigla.message}</p>}
                    </div>
                </div>   
            </form>

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
                                    <TableCell className="text-right">
                                        <Link className="mr-2" to={`/unidades/detalhes/${unit.id}`}>
                                            <Button size={"sm"} className="bg-zinc-200 hover:bg-zinc-400">
                                                <List size={5} color="black" />
                                            </Button>
                                        </Link>
                                        <Button size={"sm"} onClick={() => deleteUnit(Number(unit.id))} className="bg-zinc-200 hover:bg-zinc-400 mr-2">
                                            <Trash size={5} color="red" />
                                        </Button>
                                        <Button size={"sm"} className="bg-zinc-200 hover:bg-zinc-400">
                                            <Pencil size={5} color="blue" />
                                        </Button>
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