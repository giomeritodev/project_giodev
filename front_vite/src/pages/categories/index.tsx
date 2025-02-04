import { EmptyFile } from "@/components/emptyFile";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { api } from "@/lib/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { Pencil, PlusCircle, Save, Trash, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as z from "zod";
import { UseCategory } from "./hooks/useCategory";
import { AlertDialogVisao } from "@/components/modal/alertDialog";
import { ModalEdit } from "@/components/modal/modalEdit";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import { DialogClose, DialogTitle } from "@radix-ui/react-dialog";

const createCategorySchema = z.object({
    name: z.string().min(3, "Favor informar um valor valido.")
})

type CreateCategorySchema = z.infer<typeof createCategorySchema>

export function Categories(){
    const {
        categories,
        deleteCategory,
        editCategory,
    } = UseCategory();
    const { register, handleSubmit, formState: {errors}} = useForm<CreateCategorySchema>({
        resolver: zodResolver(createCategorySchema),
        defaultValues: {
            name: ""
        }
    })

    async function handleCreateCategory({name}: CreateCategorySchema){
        try {
          await api.post("/category", {name}).then(response => {
            toast.success("Item cadastrado com sucesso.")
            return response;
          })  
        } catch (error) {
            toast.error("Ops; Houve um erro ao cadastrar.")
        }
    }

    return (
        <div>
            <div>
                <Dialog>
                    <DialogTrigger asChild>
                        <div className="flex justify-between">
                            <div>
                                <h1>Pagina de categorias</h1>
                            </div>
                            <div>
                                <Button>
                                    <PlusCircle  />
                                    Nova categoria
                                </Button>
                            </div>
                        </div>    
                    </DialogTrigger>

                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Nova categoria</DialogTitle>
                            <DialogDescription>Criar um novo cadastro de categoria no sistema</DialogDescription>
                        </DialogHeader>

                            <form 
                                {...createCategorySchema} 
                                onSubmit={handleSubmit(handleCreateCategory)}
                                className="space-y-6"
                            >       
                                <div className="grid grid-cols-4 items-center text-right gap-3">
                                    <Label htmlFor="name">Categoria</Label>
                                    <Input
                                        className="col-span-3"
                                        id="name"
                                        {...register("name")} 
                                    />
                                    {errors.name && <p className="text-red-600 col-span-3">{errors.name.message}</p>}
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
                            categories.length === 0 ?
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
                                            <TableHead>Descrição da categoria</TableHead>
                                            <TableHead className="text-right">Opções</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {categories.map((cat) => (
                                        <TableRow key={cat.id}>
                                            <TableCell className="font-medium">{cat.id}</TableCell>
                                            <TableCell>{cat.name}</TableCell>
                                            <TableCell className="flex justify-end">
                                                    
                                                <AlertDialogVisao 
                                                    id={Number(cat.id)} 
                                                    deleteItem={() => deleteCategory(Number(cat.id))}
                                                    item={`${cat.name}`}
                                                >                                                    
                                                    <Button size={"sm"} className="bg-zinc-200 hover:bg-zinc-400 mr-2">
                                                        <Trash size={5} color="red" />
                                                    </Button>
                                                    
                                                </AlertDialogVisao>
                                                <ModalEdit
                                                    url="category/edit"
                                                    id={Number(cat.id)}
                                                    description={`${cat.name}`}
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