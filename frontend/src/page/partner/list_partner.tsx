import { Link, useParams } from "react-router-dom";
import { UsePartner } from "./hooks/usePartner"
import { useEffect, useState } from "react";
import { LabelVisao } from "../../components/ui/label";
import { InputVisao } from "../../components/ui/input";
import { Button } from "../../components/ui/button/button";
import { HiOutlinePencil, HiOutlinePlus, HiOutlineReply, HiOutlineTrash } from "react-icons/hi";
import { Table } from "../../components/table/table";
import { TableHeaderTh } from "../../components/table/table-header";
import { TableRow } from "../../components/table/table-row";
import { TableCellTd } from "../../components/table/table-cell-td";
import { AddressModal } from "./modal/address.modal";


export function ListPartner(){
    const {
        partner,
        findByPartner,
        addresses,
    } = UsePartner();

    const query = useParams();
    const [name, setName] = useState(partner?.name)
    const [cpfOrCnpj, setCpfOrCnpj] = useState(partner?.cpfOrCnpj)
    const [typePartnerId, setTypePartnerId] = useState(partner?.typeParnerId)

    useEffect(() => {
        findByPartner(Number(query.id));
    }, [partner])

    return (
        <div className="flex flex-col">
            <div className="flex justify-between border border-white/10 rounded-lg p-5 mb-5">
                <span className="text-xl">Detalhes do parceiro</span>
                <div>
                    <Link to={"/parceiros"}>
                        <Button variant="secondary">
                            Voltar
                            <HiOutlineReply />
                        </Button>
                    </Link>
                </div>
            </div>    

            <div className="border border-white/10 rounded-lg p-5">
                <form action="">
                    {
                        partner ? (
                            <div>
                                <div className="flex flex-row gap-4">
                                    <div className="w-1/1">
                                        <LabelVisao>Código</LabelVisao>
                                        <InputVisao
                                            disabled 
                                            value={partner.id}
                                        />                              
                                    </div>

                                    <div className="w-full">
                                        <LabelVisao>Parceiro</LabelVisao>
                                        <InputVisao
                                            defaultValue={partner.name} 
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />                              
                                    </div>
                                </div>

                                <div className="flex flex-row gap-4">
                                    <div className="w-1/2">
                                        <LabelVisao>CPF ou CNPJ</LabelVisao>
                                        <InputVisao
                                            defaultValue={partner.cpfOrCnpj} 
                                            value={cpfOrCnpj}
                                            onChange={(e) => setCpfOrCnpj(e.target.value)}
                                        />                              
                                    </div>

                                    
                                    <div className="w-full">
                                        <LabelVisao>Tipo do parceiro</LabelVisao>
                                        <InputVisao
                                            defaultValue={partner.typePartner.name} 
                                            value={typePartnerId}
                                            onChange={(e) => setTypePartnerId(Number(e.target.value))}
                                        />                                             
                                    </div>
                                </div>                                
                                
                            </div>
                        ) : (
                            <div className="p-5 bg-zinc-400 rounded-lg">
                                <span>Nenhum dado encontrado!</span>    
                            </div>
                        )
                    }
                </form>
            </div>    

            <div className="border border-white/10 p-5 mt-2 rounded-lg">
                <div className="flex justify-between p-3">
                    <div>
                        <span>Endereços</span>
                    </div>
                    <div>
                        <Button variant="primary">
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

            </div>
        </div>
    )
}