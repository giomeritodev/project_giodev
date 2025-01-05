import { HiOutlinePencil, HiOutlinePlus, HiOutlineTrash } from "react-icons/hi";
import { Table } from "../../components/table/table";
import { TableCellTd } from "../../components/table/table-cell-td";
import { TableHeaderTh } from "../../components/table/table-header";
import { TableRow } from "../../components/table/table-row";
import { Button } from "../../components/ui/button/button";
import { useEffect, useState } from "react";
import { UsePartner } from "./hooks/usePartner";
import { AddressModal } from "./modal/address.modal";

interface AddressListProps {
    partnerId: number,
}

export function ListAddress({partnerId }: AddressListProps){
    const {
        addresses,
        findByPartner,
    } = UsePartner();

    useEffect(() => {
        findByPartner(partnerId);
    }, [])

    const [open, setOpen] = useState<boolean>(false);

    function openModalAddress(){
        setOpen(true);
    }
    function closeModalAddress(){
        setOpen(false);
    }
    
    return (
        <div>
            <div className="flex justify-between p-3">
                    <div>
                        <span>Endereços</span>
                    </div>
                    <div>
                        <Button variant="primary" onClick={openModalAddress}>
                            Novo endereço
                            <HiOutlinePlus size={20} />
                        </Button>
                    </div>
                </div>

                <div>                  

                    <div className="border border-white/10 p-2 rounded-lg">
                        { addresses?.length === 0 || null ? (<div>Nenhum endereço cadastrado!</div>) : (
                            <Table>
                                <thead>
                                    <tr>
                                        <TableHeaderTh>#</TableHeaderTh>
                                        <TableHeaderTh>Rua / Número</TableHeaderTh>
                                        <TableHeaderTh>Complemento / Bairro</TableHeaderTh>
                                        <TableHeaderTh>Cep / Cidade / UF</TableHeaderTh>                                        
                                        <TableHeaderTh>Ações</TableHeaderTh>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    addresses?.map((add, index) => (
                                        <TableRow key={index}>
                                            <TableCellTd>{index + 1}</TableCellTd>
                                            <TableCellTd>
                                                <span className="text-xl">{add.public_place}</span>
                                                <span className="flex flex-wrap text-sm">{add.number_address}</span>
                                            </TableCellTd>
                                            <TableCellTd>
                                                <span className="text-xl">{add.complement}</span>
                                                <span className="flex flex-wrap text-sm">{add.sector}</span>
                                            </TableCellTd>
                                            <TableCellTd>
                                                <span className="text-xl">{add.cep}</span>
                                                <span className="flex flex-wrap text-sm">{add.city.name} - {add.city.state.uf}</span>
                                            </TableCellTd>
                                            <TableCellTd className="flex flex-wrap gap-4">
                                                <div className="cursor-pointer">
                                                    <HiOutlinePencil size={20} />
                                                </div>
                                                <div className="cursor-pointer">
                                                    <HiOutlineTrash size={20} color="red"/>
                                                </div>
                                            </TableCellTd>
                                        </TableRow>
                                    ))
                                }
                                </tbody>
                            </Table>      
                        )}
                    </div>
                </div>
                <AddressModal open={open} partnerId={partnerId} />
        </div>
    )
}