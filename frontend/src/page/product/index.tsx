import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal, Plus, Search } from "lucide-react";
import { HeaderTable } from "../../components/headerTable/title";
import { TableHeaderTh } from "../../components/table/table-header";
import { Table } from "../../components/table/table";
import { TableRow } from "../../components/table/table-row";
import { TableCellTd } from "../../components/table/table-cell-td";
import { IconButton } from "../../components/button/IconButton";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { api } from "../../lib/api";
import { Pagination } from "../../components/pagination";
import { Link, useNavigate } from "react-router-dom";
import { ProductType } from "./interface/Product";
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from "@headlessui/react";
import { UseProduct } from "./hooks/useProduct";


export function Product(){
    const navigate = useNavigate();
    const [products, setProducts] = useState<ProductType[]>([]);
   
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

    const {deleteProduct} = UseProduct();

    async function getData(){
        await api.get(`/product?page=${page}&search=${search}`).then(response => {
            setProducts(response.data.product)
            setTotal(response.data.total)
            setTotalPage(response.data.totalPages)
        })
    }    

    useEffect(() => {      
        getData()
    }, [page, search])
    

    return (
        <div className="flex flex-col gap-8">
            <div className="flex items-center justify-between">
                <HeaderTable title="Produtos">                
                    <Search className="size-4 text-emerald-300"/>
                    <input
                        onChange={onSearchInputChange} 
                        value={search}                        
                        className="bg-transparent outline-none border-0 p-0 text-sm focus:ring-0" 
                        placeholder="Buscar produto" 
                    />
                </HeaderTable>
                <div className="border bg-white/10 rounded-lg p-2 hover:bg-zinc-900 font-semibold">
                    <button className="flex items-center px-2">
                        <Plus className="size-5" />
                        <Link to={"/produtos/novo"}>
                            <span>Novo cadastro</span>
                        </Link>
                    </button>
                </div>                
            </div>
            <div className="flex flex-row gap-2">

                <div className="border border-white/10 px-5 py-5 rounded-lg flex-1">
                    <Table className="w-full">
                        <thead>
                            <tr className="border-b border-white/10">
                                <TableHeaderTh>
                                    <input type="checkbox" className={classNames("", "")}/>
                                </TableHeaderTh>
                                <TableHeaderTh>Código</TableHeaderTh>
                                <TableHeaderTh>Descrição do Item</TableHeaderTh>
                                <TableHeaderTh>Valor Unitário</TableHeaderTh>
                                <TableHeaderTh>Estoque</TableHeaderTh>
                                <TableHeaderTh>Valor Total</TableHeaderTh>
                                <TableHeaderTh>Ações</TableHeaderTh>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((product) => (
                                    <TableRow key={product.id}>
                                        <TableCellTd>
                                            <input type="checkbox" className={classNames("", "")}/>
                                        </TableCellTd>
                                        <TableCellTd>{product.id}</TableCellTd>
                                        <TableCellTd>{product.name}</TableCellTd>
                                        <TableCellTd>R$ {product.price}</TableCellTd>
                                        <TableCellTd>{product.amount}</TableCellTd>
                                        <TableCellTd>R$ {product.amount * product.amount}</TableCellTd>
                                        <TableCellTd key={product.id}>
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
                                                                        onClick={() => navigate(`/product/${product.id}`)}
                                                                    >
                                                                        Listar
                                                                    </div>                                            
                                                                )}
                                                            </MenuItem>
                                                            <MenuItem>
                                                                {({ active }) => (
                                                                    <div
                                                                        className={classNames(active && "bg-zinc-700", "focus:bg-zinc-200 cursor-pointer rounded-sm px-4 py-2 block")}
                                                                        onClick={() => navigate("/profile")}
                                                                    >
                                                                        Editar
                                                                    </div>                                            
                                                                )}
                                                            </MenuItem>
                                                            <MenuItem>
                                                                {({ active }) => (
                                                                    <div
                                                                        className={classNames(active && "bg-zinc-700", "focus:bg-zinc-200 cursor-pointer rounded-sm px-4 py-2 block")}
                                                                        onClick={() => deleteProduct(product.id)}
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
                                <TableCellTd colSpan={3}>Mostrando {products.length} de {total} itens</TableCellTd>
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

                <div className="w-[360px] border border-white/10 rounded-lg px-5 py-5">
                    <h1 className="font-semibold border-b border-white/10 p-2">Produtos com estoque crítico</h1>
                    {
                        products.map((product) => (
                            product.amount < 2 ? (
                                <div className="py-2">
                                    <p className="font-semibold">{product.name}</p>
                                    <span className="text-sm text-red-500">
                                        <b>{product.amount}</b> em estoque
                                    </span>
                                </div>
                            ) : ("")
                        ))
                    }                    
                    
                </div>
           
            </div> 
        </div>
    )
}