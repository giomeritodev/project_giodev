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
import { Link } from "react-router-dom";

interface ProducT {
    id: number;
    barCode?: string;
    reference?: string;
    name: string;
    price: number;
    amount: number;
    unitId: number;
    categoryId: number;
    category: {
        id: number;
        name: string;
    }    
    unit: {
        id: number;
        name: string;
        sigla: string;
    }
}

export function Product(){
    const [products, setProducts] = useState<ProducT[]>([]);
   
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
                                        <TableCellTd>
                                            <IconButton transparent                                                                                                                                                         ={true}>
                                                <MoreHorizontal className="size-4"/>
                                            </IconButton>
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