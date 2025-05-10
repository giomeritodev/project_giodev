import { useParams } from "react-router-dom"
import { UseEntry } from "./hooks/useEntry";
import { useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { UsePartner } from "../partner/hooks/usePartner";
import { StatusEntry } from "./constant/status";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";
import { HeaderPage } from "@/components/header/header-page";
import { HookFunctionsUtils } from "@/lib/functionsUtils";
import { UseItemsEntry } from "./items-entry/hooks/useItemsEntry";
import { EmptyFile } from "@/components/emptyFile";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AlertDialogVisao } from "@/components/modal/alertDialog";
import { NewItemEntry } from "./items-entry/newItemEntry";
import { ItemsEntryType } from "./items-entry/entities/itemsEntryEntity";
import { NewPayment } from "./payment/newPayment";
import { UsePayment } from "./payment/hook/usePayment";
import { PaymentType } from "./payment/entities/PaymentType";


export function DetailsEntries() {
    const query = useParams();
    const {
        FindAllPartnerNames,
        partners,
    } = UsePartner()
    const {
        dateEntry,
        numberDocument,
        partnerId,
        statusId,
        setDateEntry,
        setNumberDocument,
        setPartnerId,
        setStatusId,
        entry,
        findByEntry,
    } = UseEntry();
    const { buttonStatus, activeInputsStatus } = HookFunctionsUtils()
    const { findAllItemsEntry, items, deleteItem } = UseItemsEntry()
    const { payments, findPaymentByEntry, deletePayment } = UsePayment()

    //FindAllPartnerNames("Fornecedor");

    const sum = items.reduce(calculate, 0);
    function calculate(total: number, item: ItemsEntryType) {
        return total + (item.amount * item.shoppingValue);
    }

    const pend = payments.reduce(pendente, 0);
    function pendente(faltante: number, item: PaymentType) {
        return faltante + (item.valuePayment);
    }

    useEffect(() => {
        findByEntry(Number(query.id));
        findAllItemsEntry(Number(query.id));
        findPaymentByEntry(Number(query.id));
    }, [entry])

    return (
        <div>
            <HeaderPage
                editInputs={() => activeInputsStatus}
                title="Pagina de detalhes das entradas"
                url="/entradas"
            />
            <div>
                <div className="sm:flex w-full gap-4">
                    <div className="w-full">
                        <Label htmlFor="id">Código</Label>
                        <Input
                            id="id"
                            disabled
                            defaultValue={entry?.id}
                        />
                    </div>
                    <div className="w-full">
                        <Label htmlFor="dateEntry">Data da entrada</Label>
                        <Input
                            disabled={buttonStatus}
                            defaultValue={entry?.dateEntry}
                            //value={name}
                            onChange={(e) => setDateEntry(e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <div>
                        <Label htmlFor="numberDocument">Número documento</Label>
                        <Input
                            disabled={buttonStatus}
                            defaultValue={entry?.numberDocument}
                            //value={barCode}
                            onChange={(e) => setNumberDocument(Number(e.target.value))}
                        />
                    </div>
                </div>

                <div className="sm:flex gap-4 justify-normal mb-4">
                    <div className="sm:w-1/2 mb-4">
                        <Label htmlFor="partnerId">Fornecedor</Label>
                        <select
                            disabled={buttonStatus}
                            className="w-full h-10 rounded-lg"
                            id="partnerId"
                            defaultValue={entry?.partnerId}
                            //value={unitId}
                            onChange={(e) => setPartnerId(Number(e.target.value))}
                        >
                            <option value={entry?.partnerId}>{entry?.partner.name}</option>
                            {
                                partners.map(part => (
                                    <option value={part.id}>{part.name}</option>
                                ))
                            }
                        </select>

                    </div>
                    <div className="sm:w-1/2">
                        <Label htmlFor="status">Status</Label>
                        <select
                            disabled={buttonStatus}
                            className="w-full h-10 rounded-lg"
                            id="statusId"
                            defaultValue={entry?.statusId}
                            //value={categoryId}
                            onChange={(e) => setStatusId(Number(e.target.value))}
                        >
                            <option value={entry?.statusId}>{entry?.status.name}</option>

                        </select>

                    </div>
                </div>
            </div>

            <div className="mt-10 sm:w-auto border border-zinc/10 p-4 rounded-lg">
                <div className="flex justify-between">
                    <div>
                        <h1>Itens de entrada</h1>
                    </div>
                    <div>
                        <NewItemEntry id={Number(query.id)}>
                            <Button>
                                <Plus />
                                Novo
                            </Button>
                        </NewItemEntry>

                    </div>
                </div>

                <div>
                    {
                        items.length === 0 ?
                            (
                                <EmptyFile />
                            )
                            :
                            (
                                <Table className="table-fixed">
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="sm:w-[100px]">#</TableHead>
                                            <TableHead>Descrição do produto</TableHead>
                                            <TableHead>Quantidade</TableHead>
                                            <TableHead>Valor de Compra</TableHead>
                                            <TableHead>Total do item</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {items.map((item, index) => (
                                            <TableRow key={item.id}>
                                                <TableCell className="font-medium">{index + 1}</TableCell>
                                                <TableCell>{item.product.name}</TableCell>
                                                <TableCell>{item.amount}</TableCell>
                                                <TableCell>{item.shoppingValue}</TableCell>
                                                <TableCell>{item.amount * item.shoppingValue}</TableCell>
                                                <TableCell>
                                                    <AlertDialogVisao
                                                        id={Number(item.id)}
                                                        deleteItem={() => deleteItem(Number(item.entryId), Number(item.id))}
                                                        item={item.product.name}
                                                    >
                                                        <Button className="bg-zinc-200 hover:bg-zinc-400">
                                                            <Trash2 size={5} color="black" />
                                                        </Button>
                                                    </AlertDialogVisao>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                    <TableFooter className="">
                                        <h1>Valor total da compra</h1>
                                        <h1>R$ {sum}</h1>
                                    </TableFooter>
                                </Table>
                            )
                    }
                </div>

            </div>

            <div className="mt-10 sm:w-auto border border-zinc/10 p-4 rounded-lg">
                <div className="flex justify-between">
                    <div>
                        <h1>Pagamentos da compra</h1>
                    </div>
                    <div>
                        <NewPayment id={Number(query.id)} total={sum}>
                            <Button>
                                <Plus />
                                Novo
                            </Button>
                        </NewPayment>

                    </div>
                </div>

                <div>
                    {
                        payments.length === 0 ?
                            (
                                <EmptyFile />
                            )
                            :
                            (
                                <Table className="table-fixed">
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="sm:w-[100px]">#</TableHead>
                                            <TableHead>Data pagamento</TableHead>
                                            <TableHead>Forma de pagamento</TableHead>
                                            <TableHead>Status Pagamento</TableHead>
                                            <TableHead>Valor pagamento</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {payments.map((item, index) => (
                                            <TableRow key={item.id}>
                                                <TableCell className="font-medium">{index + 1}</TableCell>
                                                <TableCell>{item.datePayment}</TableCell>
                                                <TableCell>{item.formOfPayment?.name}</TableCell>
                                                <TableCell>{item.statusPayment?.name}</TableCell>
                                                <TableCell>{item.valuePayment}</TableCell>
                                                <TableCell>
                                                    <AlertDialogVisao
                                                        id={Number(item.id)}
                                                        deleteItem={() => deletePayment(Number(item.entryId), Number(item.id))}
                                                        item={String(item.valuePayment)}
                                                    >
                                                        <Button className="bg-zinc-200 hover:bg-zinc-400">
                                                            <Trash2 size={5} color="black" />
                                                        </Button>
                                                    </AlertDialogVisao>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                    <TableFooter className="">
                                        <h1>Valor faltante da compra</h1>
                                        <h1 className="text-red-600 font-bold text-2xl">R$ {sum - pend}</h1>
                                    </TableFooter>
                                </Table>
                            )
                    }
                </div>

            </div>

        </div>

    )
}