import { EmptyFile } from "@/components/emptyFile";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { List } from "lucide-react";
import { PartnerType } from "./entities/partnerEntity";

interface PartnerProps {
    partners: PartnerType[]
}

export function ListPartners({partners}: PartnerProps){

    return (
        <div>
            <div>
                {
                    partners.length === 0 ?
                    (
                        <EmptyFile />
                    )
                    :   
                    (                        
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[100px]">Código</TableHead>
                                    <TableHead>Descrição do parceiro</TableHead>
                                    <TableHead>CPF/CNPJ</TableHead>
                                    <TableHead className="text-right">Tipo do parceiro</TableHead>
                                    <TableHead className="text-right">Opções</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {partners.map((partner) => (
                                <TableRow key={partner.id}>
                                    <TableCell className="font-medium">{partner.id}</TableCell>
                                    <TableCell>{partner.name}</TableCell>
                                    <TableCell>{partner.cpfOrCnpj}</TableCell>
                                    <TableCell className="text-right">{partner.typePartner.name}</TableCell>
                                    <TableCell className="text-right">
                                        <Link to={`/parceiros/detalhes/${partner.id}`}>
                                            <Button className="bg-zinc-200 hover:bg-zinc-400">
                                                <List size={5} color="black" />
                                            </Button>
                                        </Link>
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