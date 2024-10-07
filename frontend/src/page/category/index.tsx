import { MoreHorizontal, Plus, Search } from "lucide-react";
import { HeaderTable } from "../../components/headerTable/title";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button/button";
import { Table } from "../../components/table/table";
import { TableHeaderTh } from "../../components/table/table-header";
import { UseCategory } from "./hooks/useCategory";
import { TableRow } from "../../components/table/table-row";
import { TableCellTd } from "../../components/table/table-cell-td";
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from "@headlessui/react";
import { IconButton } from "../../components/ui/button/IconButton";
import classNames from "classnames";

export function Category(){
    const {categories} = UseCategory();

    return (
        <div className="flex flex-col gap-8">
            

            <div className="flex flex-row ga-2">
                <div className="border border-white/10 px-5 py-5 rounded-lg flex-1">
                    <div className="flex items-center justify-between">
                        <HeaderTable title="Categoria">                
                            <Search className="size-4 text-emerald-300"/>
                            <input
                                                    
                                className="bg-transparent outline-none border-0 p-0 text-sm focus:ring-0" 
                                placeholder="Buscar categoria" 
                            />
                        </HeaderTable>
                        
                        <div>
                            <Link to={"/categorias/novo"}>
                                <Button>
                                        Novo Cadastro
                                        <Plus size={20} />
                                </Button>
                            </Link>  
                            
                        </div>            
                    </div>
                </div>                
            </div>

            <div className="flex flex-row ga-2">
                <div className="border border-white/10 px-5 py-5 rounded-lg flex-1">
                    { categories.length === 0 ? (
                        <div className="text-xl">
                            <span>Nenhum item cadastrado ainda!</span>
                        </div>
                    ) : ( 
                        <Table className="w-full">
                            <thead>
                                <tr className="border-b border-white/10">                            
                                    <TableHeaderTh>Código</TableHeaderTh>
                                    <TableHeaderTh>Categoria</TableHeaderTh>
                                    <TableHeaderTh>Ações</TableHeaderTh>
                                </tr>
                            </thead>
                            <tbody>
                                {   
                                    categories.map(cat => (
                                        <TableRow>
                                            <TableCellTd>{cat.id}</TableCellTd>
                                            <TableCellTd>{cat.name}</TableCellTd>
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
                        </Table>
                   )}
                </div>                
            </div>
        </div>
    )
}