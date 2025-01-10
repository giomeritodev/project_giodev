import { AlertDialogVisao } from "@/components/modal/alertDialog";
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
import {z} from "zod";
import { UseFormOfPayment } from "./hooks/useFormOfPayment";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader } from "@/components/ui/dialog";
import { DialogTitle, DialogTrigger } from "@radix-ui/react-dialog";

const createFormOfPaymentSchema = z.object({
    name: z.string().min(3, "Favor informar valor valido.")
})

type CreateFormOfPaymentSchema = z.infer<typeof createFormOfPaymentSchema>

export function FormOfPayment(){

    const {register, handleSubmit, formState: {errors}} = useForm<CreateFormOfPaymentSchema>({
        resolver: zodResolver(createFormOfPaymentSchema),
        defaultValues: {
            name: "",
        }
    })

    const {
        deleteFormOfPayment,
        formsOfPayment                
    } = UseFormOfPayment();

    async function handleCreateFormOfPayment({name}: CreateFormOfPaymentSchema){
        try {
            await api.post("/form-of-payment", {name}).then(response => {
                toast.success("Item criado com sucesso.")
                return response;
            })
        } catch (error) {
            toast.error("Ops; Houve um erro ao criar o item.")
        }
    }

    return (
        <div>

            <Dialog>
                <DialogTrigger asChild>
                    <div className="flex justify-between">
                        <div>
                            <h1>Formas de pagamento</h1>
                        </div>
                        <div>
                            <Button>
                                <PlusCircle />
                                Nova forma de pagamento
                            </Button>
                        </div>
                        
                    </div>                    
                </DialogTrigger>

                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Nova forma de pagamento</DialogTitle>
                        <DialogDescription>Criar um novo cadastro de forma de pagamento</DialogDescription>
                    </DialogHeader>


                    <form 
                        {...createFormOfPaymentSchema} 
                        onSubmit={handleSubmit(handleCreateFormOfPayment)}
                        className="space-y-6"
                    >
                        <div className="grid grid-cols-4 items-center text-left gap-3">
                            <div className="col-span-4">
                                <Label htmlFor="name">Descrição da forma de pagamento</Label>
                                <Input
                                    className="col-span-3"
                                    id="name"
                                    {...register("name")}
                                />
                                {errors.name && <p className="text-red-600">{errors.name.message}</p>}
                            </div>                    
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
                    formsOfPayment.length === 0 ?
                    (
                        <EmptyFile />
                    )
                    :   
                    (                        
                        <Table>
                            <TableCaption>Lista de todas as formas de pagamento.</TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[100px]">Código</TableHead>
                                    <TableHead>Descrição da forma de pagamento</TableHead>
                                    <TableHead className="text-right">Opções</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {formsOfPayment.map((payment) => (
                                <TableRow key={payment.id}>
                                    <TableCell className="font-medium">{payment.id}</TableCell>
                                    <TableCell>{payment.name}</TableCell>
                                    <TableCell className="flex justify-end">                                        
                                        <AlertDialogVisao
                                            id={Number(payment.id)}
                                            deleteItem={() => deleteFormOfPayment(Number(payment.id))}
                                            item={`${payment.name}`} 
                                        >

                                            <Button size={"sm"} className="bg-zinc-200 hover:bg-zinc-400 mr-2">
                                                <Trash size={5} color="red" />
                                            </Button>
                                        </AlertDialogVisao>
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