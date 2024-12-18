import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button/button";
import { HeaderTable } from "../../components/headerTable/title";
// import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal, Plus, Search } from "lucide-react";
import { Table } from "../../components/table/table";
import { TableHeaderTh } from "../../components/table/table-header";
import { UseUnit } from "./hooks/useUnit";
import { TableRow } from "../../components/table/table-row";
import { TableCellTd } from "../../components/table/table-cell-td";
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from "@headlessui/react";
import { IconButton } from "../../components/ui/button/IconButton";
import classNames from "classnames";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal, Plus, Search } from "lucide-react";
import { Pagination } from "../../components/pagination";
import { useEffect } from "react";
import { api } from "../../lib/api";


export function Unit(){
    // const navigate = useNavigate();
    const {unities, setUnities} = UseUnit();


    const {
        goToLastPage,
        goToPreviousPage,
        goToNextPage,
        goToFirstPage,
        onSearchInputChange,
        total,
        totalPage,
        setTotal,
        setTotalPage,
        page,
        search,        
    } = Pagination();

    async function findAllUnitsPagination(){
        try {
            await api.get(`/unit?page=${page}&search=${search}`).then(response => {
                setUnities(response.data.unities);
                setTotal(response.data.total);
                setTotalPage(response.data.totalPages)
            })
        } catch (error) {
            
        }
    }

    useEffect(() => {
        findAllUnitsPagination()
    }, [page, search, unities])

    return(
        <div className="flex flex-col gap-8">

            <div className="flex flex-row gap-2">
                <div className="border border-white/10 px-5 py-5 rounded-lg flex-1">
                    <div className="flex items-center justify-between">
                        <HeaderTable title="Unidade de medida">                
                            <Search className="size-4 text-emerald-300"/>
                            <input
                                onChange={onSearchInputChange} 
                                value={search}                     
                                className="bg-transparent outline-none border-0 p-0 text-sm focus:ring-0" 
                                placeholder="Buscar unidade" 
                            />
                        </HeaderTable>
                        
                        <div>
                            <Link to={"/unidades/novo"}>
                                <Button>
                                        Novo Cadastro
                                        <Plus size={20} />
                                </Button>
                            </Link>  
                            
                        </div>                
                    </div>
                </div>
            </div>

            <div className="flex flex-row gap-2">
                <div className="border border-white/10 px-5 py-5 rounded-lg flex-1">
                    <Table className="w-full">
                            <thead>
                                <tr className="border-b border-white/10">
                                
                                    <TableHeaderTh>Código</TableHeaderTh>
                                    <TableHeaderTh>Unidade de medida</TableHeaderTh>
                                    <TableHeaderTh>Sigla</TableHeaderTh>
                                    <TableHeaderTh>Ações</TableHeaderTh>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    unities && unities.map(unit => (
                                        <TableRow key={unit.id}>
                                            <TableCellTd>{unit.id}</TableCellTd>    
                                            <TableCellTd>{unit.name}</TableCellTd>    
                                            <TableCellTd>{unit.sigla}</TableCellTd>    
                                            <TableCellTd>
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
                                                                        
                                                                    >
                                                                        Listar
                                                                    </div>                                            
                                                                )}
                                                            </MenuItem>
                                                            
                                                            <MenuItem>
                                                                {({ active }) => (
                                                                    <div
                                                                        className={classNames(active && "bg-zinc-700", "focus:bg-zinc-200 cursor-pointer rounded-sm px-4 py-2 block")}
                                                                        
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
                                    ))
                                }
                            </tbody>
                            <tfoot>
                                <tr>
                                    <TableCellTd colSpan={3}>Mostrando {unities.length} de {total} itens</TableCellTd>
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
                                <tr>
                                    <TableCellTd colSpan={4}>
                                        
                                    </TableCellTd>
                                </tr>
                                                        
                            </tfoot>
                    </Table>
                </div>
            </div>

        </div>
    )
}