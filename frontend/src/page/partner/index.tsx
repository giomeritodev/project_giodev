import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal, Plus, Search } from "lucide-react";
import { HeaderTable } from "../../components/headerTable/title";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button/button";
import { Pagination } from "../../components/pagination";
import { Table } from "../../components/table/table";
import { TableCellTd } from "../../components/table/table-cell-td";
import { IconButton } from "../../components/ui/button/IconButton";
import { TableHeaderTh } from "../../components/table/table-header";
import { TableRow } from "../../components/table/table-row";
import { PartnerType } from "./interface/Partner";
import { useEffect, useState } from "react";
import { api } from "../../lib/api";
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from "@headlessui/react";
import classNames from "classnames";
import { UsePartner } from "./hooks/usePartner";


export function Partner(){
    const navigate = useNavigate();
    const [partners, setPartners] = useState<PartnerType[]>([])

    const {
        goToLastPage,
        goToPreviousPage,
        goToNextPage,
        goToFirstPage,
        onSearchInputChange,
        total,
        totalPage,
        page,
        search,
        setTotal,
        setTotalPage,
    } = Pagination();

    const {
        deletePartner
    } = UsePartner();

    async function getData(){        
        await api.get(`/partner?page=${page}&search=${search}`).then(response => {            
            setPartners(response.data.partner)
            setTotal(response.data.total)
            setTotalPage(response.data.totalPages)
        })
    }

    useEffect(() => {
        getData();
    }, [page, search])

    return (
        <div className="flex flex-col gap-8">
            <div className="border border-white/10 p-5 rounded flex items-center justify-between">
                <HeaderTable title="Parceiros">                
                    <Search className="size-4 text-emerald-300"/>
                    <input
                        onChange={onSearchInputChange} 
                        value={search}                        
                        className="bg-transparent outline-none border-0 p-0 text-sm focus:ring-0" 
                        placeholder="Buscar parceiros" 
                    />
                </HeaderTable>
                <div>
                    <Link to={"/parceiros/novo"}>
                        <Button>
                                Novo Cadastro
                                <Plus size={20} />
                        </Button>
                    </Link>  
                    
                </div>                
            </div>
            <div className="flex flex-row gap-2">

                <div className="border border-white/10 px-5 py-5 rounded-lg flex-1">
                    <Table>
                        <thead>
                            <tr className="border-b border-white/10">                                
                                <TableHeaderTh>Código</TableHeaderTh>
                                <TableHeaderTh>Descrição do parceiro</TableHeaderTh>
                                <TableHeaderTh>CPF ou CNPJ</TableHeaderTh>
                                <TableHeaderTh>Tipo</TableHeaderTh>
                                <TableHeaderTh>Telefone</TableHeaderTh>                                
                                <TableHeaderTh>Ações</TableHeaderTh>
                            </tr>
                        </thead>
                        <tbody>
                            { 
                                partners.map(part => (
                                    
                                        <TableRow key={part.id}>
                                            
                                            <TableCellTd>{part.id}</TableCellTd>
                                            <TableCellTd>{part.name}</TableCellTd>
                                            <TableCellTd>{part.cpfOrCnpj}</TableCellTd>
                                            <TableCellTd>{part.typePartner.name}</TableCellTd>
                                            <TableCellTd>{part.fone}</TableCellTd>                                            
                                            <TableCellTd key={part.id}>
                                                    <Menu as="div" className="relative inline-block text-left">
                                                        <div>
                                                            <MenuButton>
                                                                <IconButton transparent={true}>
                                                                    <MoreHorizontal className="size-4"/>
                                                                </IconButton>                                                
                                                            </MenuButton>
                                                        </div>
                                                        <Transition
                                                            enter="transition ease-out duration-100"
                                                            enterFrom="transform opacity-0 scale-95"
                                                            enterTo="transform opacity-100 scale-100"
                                                            leave="transition ease-in duration-75"
                                                            leaveFrom="transform opacity-100 scale-100"
                                                            leaveTo="transform opacity-0 scale-95"
                                                        >
                                                            <MenuItems className="absolute origin-top-right z-10 right-0 mt-2 w-40 rounded-sm shadow-md p-1 ring-black ring-1 ring-opacity-5 focus:outline-none bg-zinc-100 text-zinc-950">
                                                            <div className="px-1 py-1 ">
                                                                <MenuItem>
                                                                    {({ active }) => (
                                                                        <div
                                                                            className={classNames(active && "bg-zinc-700", "focus:bg-zinc-200 cursor-pointer rounded-sm px-4 py-2 block")}
                                                                            onClick={() => navigate(`/parceiros/${part.id}`)}
                                                                        >
                                                                            Listar
                                                                        </div>                                            
                                                                    )}
                                                                </MenuItem>
                                                                
                                                                <MenuItem>
                                                                    {({ active }) => (
                                                                        <div
                                                                            className={classNames(active && "bg-zinc-700", "focus:bg-zinc-200 cursor-pointer rounded-sm px-4 py-2 block")}
                                                                            onClick={() => deletePartner(part.id)}
                                                                        >
                                                                            Deletar
                                                                        </div>                                            
                                                                    )}
                                                                </MenuItem>
                                                            </div>
                                                            </MenuItems>   
                                                        </Transition>
                                                    </Menu>

                                            </TableCellTd>                                        
                                        </TableRow>
                                    )
                                )
                            }
                        </tbody>
                        <tfoot>
                            <tr>
                                <TableCellTd colSpan={3}>Mostrando {totalPage} de {total} itens</TableCellTd>
                                <TableCellTd className="text-right" colSpan={3}>
                                    <div className="inline-flex items-center gap-8">                                    
                                        <span>Página {page} de {totalPage}</span>  
                                        <div className="flex gap-1.5">
                                            <IconButton onClick={goToFirstPage} disabled={page === 1}>
                                                <ChevronsLeft className="size-4"/>
                                            </IconButton>
                                            <IconButton onClick={goToPreviousPage} disabled={page === 1}>
                                                <ChevronLeft className="size-4"/>
                                            </IconButton>
                                            <IconButton onClick={goToNextPage} disabled={page === totalPage}>
                                                <ChevronRight className="size-4"/>
                                            </IconButton>
                                            <IconButton onClick={goToLastPage} disabled={page === totalPage}> 
                                                <ChevronsRight className="size-4"/>
                                            </IconButton>                                    
                                        </div>
                                    </div>
                                </TableCellTd>
                            </tr>
                                                        
                        </tfoot>
                    </Table>
                </div>
            </div>
        </div>
    )
}