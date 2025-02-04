
import { EmptyFile } from "@/components/emptyFile";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { useEffect } from "react";
import { AlertDialogVisao } from "@/components/modal/alertDialog";
import { UseContact } from "./hooks/useContact";

interface ContactProps {
    partnerId: number; 
}

export function Contact({partnerId}: ContactProps){

    const {findAllContactsInPartner, contacts, deleteContact} = UseContact();

    useEffect(() => {
        findAllContactsInPartner(partnerId);
    }, [contacts])

    return (
        <div>
            
            <div>
                {
                    contacts.length === 0 ?
                    (
                        <EmptyFile />
                    )
                    :   
                    (                        
                        <Table className="table-fixed">
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="sm:w-[100px]">#</TableHead>
                                    <TableHead>Telefone / Email</TableHead>
                                    <TableHead>Nome / Cargo</TableHead>
                                    <TableHead>Opções</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {contacts.map((contact, index) => (
                                    <TableRow key={contact.id}>
                                        <TableCell className="font-medium">{index + 1}</TableCell>
                                        <TableCell>
                                            <div>{contact.fone}</div>
                                            <div className="text-sm">{contact.email}</div>
                                        </TableCell>
                                        <TableCell>
                                            <div>{contact.name}</div>
                                            <div>{contact.position}</div>
                                        </TableCell>
                                        <TableCell>
                                            <AlertDialogVisao
                                                id={Number(contact.id)}
                                                deleteItem={() => deleteContact(Number(contact.id))}
                                                item={contact.fone + " " + contact.name}
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