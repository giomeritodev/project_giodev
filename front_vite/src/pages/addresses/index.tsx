
import { UseAddress } from "./hooks/useAddress";
import { EmptyFile } from "@/components/emptyFile";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { useEffect } from "react";
import { AlertDialogVisao } from "@/components/modal/alertDialog";

interface AddressProps {
    partnerId: number; 
}

export function Address({partnerId}: AddressProps){

    const {addresses, deleteAddress, findAllAddressesInPartner} = UseAddress();

    useEffect(() => {
        findAllAddressesInPartner(partnerId);
    }, [addresses])

    return (
        <div>
            
            <div>
                {
                    addresses.length === 0 ?
                    (
                        <EmptyFile />
                    )
                    :   
                    (                        
                        <Table className="table-fixed">
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="sm:w-[100px]">#</TableHead>
                                    <TableHead>Rua/numero / Complemento</TableHead>
                                    <TableHead>Cep / Bairro</TableHead>
                                    <TableHead>Cidade / UF</TableHead>
                                    <TableHead>Opções</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {addresses.map((address, index) => (
                                    <TableRow key={address.id}>
                                        <TableCell className="font-medium">{index + 1}</TableCell>
                                        <TableCell>
                                            <div>{address.public_place}, {address.number_address}</div>
                                            <div className="text-sm">{address.complement}</div>
                                        </TableCell>
                                        <TableCell>
                                            <div>{address.cep}</div>
                                            <div>{address.sector}</div>
                                        </TableCell>
                                        <TableCell>
                                            <div>{address.city.name} - {address.city.state.uf}</div>
                                        </TableCell>
                                        <TableCell>
                                            <AlertDialogVisao
                                                id={Number(address.id)}
                                                deleteItem={() => deleteAddress(Number(address.id))}
                                                item={address.public_place}
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