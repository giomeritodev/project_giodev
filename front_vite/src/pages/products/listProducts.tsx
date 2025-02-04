import { EmptyFile } from "@/components/emptyFile";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { List } from "lucide-react";
import { Link } from "react-router-dom";
import { UseProduct } from "./hooks/useProduct";

export function ListProducts(){
   
    const {products} = UseProduct();
    
    return (
        <div>

            <div>
                {
                    products.length === 0 ?
                    (
                        <EmptyFile />
                    )
                    :   
                    (                        
                        <Table>
                            <TableCaption>Lista de todos os produtos cadastrados.</TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[100px]">Código</TableHead>
                                    <TableHead>Descrição do produto</TableHead>
                                    <TableHead>Quantidade</TableHead>
                                    <TableHead className="text-right">Valor</TableHead>
                                    <TableHead className="text-right">Opções</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {products.map((product) => (
                                <TableRow key={product.id}>
                                    <TableCell className="font-medium">{product.id}</TableCell>
                                    <TableCell>{product.name}</TableCell>
                                    <TableCell>{product.amount}</TableCell>
                                    <TableCell className="text-right">{product.price}</TableCell>
                                    <TableCell className="text-right">
                                        <Link to={`/produtos/detalhes/${product.id}`}>
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