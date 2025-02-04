import { EmptyFile } from "@/components/emptyFile";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { List, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { UseEntry } from "./hooks/useEntry";


export function Entry(){

    const {
        entries
    } = UseEntry()

    return (
        <div>
            <div className="sm:flex justify-between">
                <h1>Pagina de entradas de mercadorias</h1>
                <div>
                    <Button>
                        <Plus />    
                        Nova entrada
                    </Button>
                </div>    
            </div>

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
                                    <TableCell className="text-right">{entry.status}</TableCell>
                                    <TableCell className="text-right">
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
                                <TableRow>
                                <TableCell colSpan={3}>Total</TableCell>
                                <TableCell className="text-right">$2,500.00</TableCell>
                                </TableRow>
                            </TableFooter>
                        </Table>
                    )
                }
            </div>
        </div>
    )
}