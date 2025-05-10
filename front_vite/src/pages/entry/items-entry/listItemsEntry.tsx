import { EmptyFile } from "@/components/emptyFile";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AlertDialogVisao } from "@/components/modal/alertDialog";
import { Button } from "@/components/ui/button";
import { UseItemsEntry } from "./hooks/useItemsEntry";
import { Trash2 } from "lucide-react";

interface ListItemsProps {
    entryId: number;
}

export function ListItemsEntry({entryId}: ListItemsProps){

    const {
       items,
       findAllItemsEntry, 
       deleteItem,
    } = UseItemsEntry();

    findAllItemsEntry(entryId);

    return(
        <div>
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
                                    <TableHead>Produto/unidade / Estoque</TableHead>
                                    <TableHead>Quantidade / Valor de compra</TableHead>
                                    <TableHead>Total do item</TableHead>
                                    <TableHead>Opções</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {items.map((item, index) => (
                                    <TableRow key={item.id}>
                                        <TableCell className="font-medium">{index + 1}</TableCell>
                                        <TableCell>
                                            <div>{item.product.name}, {item.product.unit.sigla}</div>
                                            <div className="text-sm">{item.product.amount}</div>
                                        </TableCell>
                                        <TableCell>
                                            <div>{item.amount}</div>
                                            <div>{item.shoppingValue}</div>
                                        </TableCell>
                                        <TableCell>
                                            <div>{item.amount * item.shoppingValue}</div>
                                        </TableCell>
                                        <TableCell>
                                            <AlertDialogVisao
                                                id={Number(item.id)}
                                                deleteItem={() => deleteItem(Number(item.id))}
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
                        </Table>
                    )
                }
            </div>
        </div>
    )

}