import { EmptyFile } from "@/components/emptyFile";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { List } from "lucide-react";
import { Link } from "react-router-dom";
import { UseProduct } from "./hooks/useProduct";

// const products = [
//     {
//         id: 1,
//         name: "Produto teste 1",
//         barCode: "12346688799",
//         reference: "1453",
//         costPrice: 12.53,
//         price: 19.85,
//         amount: 5,
//         unitId: "Unidade",
//         categoryId: "Peça",
//     },
//     {
//         id: 2,
//         name: "Produto teste 2",
//         barCode: "22346688799",
//         reference: "2453",
//         costPrice: 22.53,
//         price: 29.85,
//         amount: 5,
//         unitId: "Unidade",
//         categoryId: "Peça",
//     },
//     {
//         id: 3,
//         name: "Produto teste 3",
//         barCode: "32346688799",
//         reference: "3453",
//         costPrice: 32.53,
//         price: 39.85,
//         amount: 5,
//         unitId: "Unidade",
//         categoryId: "Peça",
//     }
// ]

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