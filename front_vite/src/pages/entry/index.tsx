import { EmptyFile } from "@/components/emptyFile";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { List, PlusCircle, Save, Trash2, X } from "lucide-react";
import { Link } from "react-router-dom";
import { UseEntry } from "./hooks/useEntry";
import { AlertDialogVisao } from "@/components/modal/alertDialog";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { UsePartner } from "../partner/hooks/usePartner";
import { UseStatusPayment } from "../statusPayment/hooks/useStatusPayment";
import { UseStatus } from "../status/hooks/useStatus";


export function Entry(){

    const {
        createEntryHandle, 
        entries, 
        deleteEntry, 
        partnerId, 
        setPartnerId, 
        statusId, 
        setStatusId, 
        dateEntry, 
        setDateEntry, 
        numberDocument, 
        setNumberDocument, 
        statusPaymentId, 
        setStatusPaymentId
    } = UseEntry()
    const {partners} = UsePartner()
    const {statusPayments} = UseStatusPayment()
    const {status} = UseStatus()

    
    return (
        <div>            
            <Dialog>
                    <DialogTrigger asChild>
                        <div className="sm:flex justify-between">
                            <div>
                                <h1>Pagina de entradas</h1>
                            </div>
                            <div>
                                <Button className="w-full">
                                    <PlusCircle  />
                                    Novo
                                </Button>
                            </div>
                        </div>    
                    </DialogTrigger>

                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Nova entrada</DialogTitle>
                            <DialogDescription>Criar um novo cadastro de entrada no sistema</DialogDescription>
                        </DialogHeader>

                            <form                                                                
                                className="space-y-4"
                            >       
                                <div className="sm:grid grid-cols-2 items-center text-left gap-3">
                                    <div>
                                        <Label htmlFor="name">Data</Label>
                                        <Input
                                            className="col-span-3"
                                            value={dateEntry}
                                            onChange={(e) => setDateEntry(e.target.value)} 
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="name">Número do Documento</Label>
                                        <Input
                                            className="col-span-3"
                                            value={numberDocument}
                                            onChange={(e) => setNumberDocument(Number(e.target.value))} 
                                        />
                                    </div>                                    
                                </div>

                                <div className="sm:grid grid-cols-2 items-center text-left gap-3">
                                    <div className="col-span-3 gap-3">
                                        <Label htmlFor="name">Fornecedor</Label>
                                        <div>
                                            <select
                                                className="h-10 border w-full  bg-white" 
                                                value={partnerId}
                                                onChange={(e) => setPartnerId(Number(e.target.value))}
                                            >
                                                    <option value="">Selecione um fornecedor</option>
                                                    {
                                                        partners.map(parceiros => (
                                                            <option value={parceiros.id}>{parceiros.name} - {parceiros.cpfOrCnpj}</option>
                                                        ))
                                                    }
                                            </select>
                                        </div>
                                    </div>                                    
                                </div>
                                <div className="sm:grid grid-cols-2 items-center text-left gap-3">
                                    <div>
                                        <Label htmlFor="name">Status</Label>
                                        <div>                                            
                                            <select
                                                className="h-10 border w-full bg-white"
                                                value={statusId}
                                                onChange={(e) => setStatusId(Number(e.target.value))}
                                            >
                                                    <option value="">Selecione uma opção</option>   
                                                {
                                                    status.map(st => (
                                                        <option value={st.id}>{st.id} - {st.name}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <Label htmlFor="name">Pagamento</Label>
                                        <div>
                                            <select
                                                className="h-10 border w-full  bg-white"
                                                value={statusPaymentId}
                                                onChange={(e) => setStatusPaymentId(Number(e.target.value))}
                                            >
                                                <option value="">Selecione uma opção</option>
                                                {
                                                    statusPayments.map(pay => (
                                                        <option value={pay.id}>{pay.name}</option>
                                                    ))
                                                }
                                            </select>
                                        </div> 
                                    </div>                                    
                                </div>                                                           

                                <DialogFooter className="gap-2">
                                    <DialogClose asChild>
                                        <Button type="button" variant="outline">
                                            <X />
                                            Cancelar
                                        </Button>
                                    </DialogClose>
                                    <Button type="button" onClick={createEntryHandle}>
                                        <Save />
                                        Salvar
                                    </Button>
                                </DialogFooter>
                                
                            </form>
                    </DialogContent>

                </Dialog>

            <div>
                {
                    entries.length === 0 ?
                    (
                        <EmptyFile />
                    )
                    :   
                    (                        
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[100px]">Código</TableHead>
                                    <TableHead>Data entrada</TableHead>
                                    <TableHead>Documento</TableHead>
                                    <TableHead className="text-right">Fornecedor</TableHead>
                                    <TableHead className="text-right">Pagamento</TableHead>
                                    <TableHead className="text-right">Opções</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {entries.map((entry) => (                                    
                                <TableRow key={entry.id}>
                                    <TableCell className="font-medium">{entry.id}</TableCell>
                                    <TableCell>{entry.dateEntry}</TableCell>
                                    <TableCell>{entry.numberDocument}</TableCell>
                                    <TableCell className="text-right">{entry.partner.name}</TableCell>
                                    <TableCell className="text-right">{entry.statusPayment.name}</TableCell>
                                    <TableCell className="flex gap-2">
                                        <AlertDialogVisao
                                            id={entry.id}
                                            deleteItem={() => deleteEntry(entry.id)}
                                            item={`${entry.numberDocument}`}
                                        >
                                            <Button className="bg-zinc-200 hover:bg-zinc-400">
                                                <Trash2 size={5} color="red" />
                                            </Button>
                                        </AlertDialogVisao>
                                        <Link to={`/entradas/detalhes/${entry.id}`}>
                                            <Button className="bg-zinc-200 hover:bg-zinc-400">
                                                <List size={5} color="black" />
                                            </Button>
                                        </Link>
                                    </TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                            <TableFooter>
                                {/* <TableRow>
                                <TableCell colSpan={3}>Total</TableCell>
                                <TableCell className="text-right">$2,500.00</TableCell>
                                </TableRow> */}
                            </TableFooter>
                        </Table>
                    )
                }
            </div>
        </div>
    )
}