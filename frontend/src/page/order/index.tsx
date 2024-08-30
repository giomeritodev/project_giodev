import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal, Plus, Search } from "lucide-react";
import { HeaderTable } from "../../components/headerTable/title";
import { Table } from "../../components/table/table";
import { TableHeaderTh } from "../../components/table/table-header";
import classNames from "classnames";
import { TableRow } from "../../components/table/table-row";
import { TableCellTd } from "../../components/table/table-cell-td";
import { IconButton } from "../../components/button/IconButton";
import { useEffect, useState } from "react";
import { api } from "../../lib/api";
import { Pagination } from "../../components/pagination";

interface OrderType {
  id: number,
  dateSale: string,
  partnerId: number,
  partner: {
    id: number,
    name: string,
  },
  typeSale: string,
  status: string,
  typePayment: number,
  createdAt: Date,
  updatedAt: Date, 
  statusPayment: number
  total: number,
  totalPages: number,
}

export function Order(){
    const [orders, setOrders] = useState<OrderType[]>([]);
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
    
        await api.get(`/sale?page=${page}&search=${search}`).then(response => {
            setOrders(response.data.sale);
            setTotal(response.data.total);
            setTotalPage(response.data.totalPages)
        })
    }


    useEffect(() => {        
        getData()        
    }, [page, search])
   

    return (
        <div className="flex flex-col gap-8">
            <div className="flex items-center justify-between">
                <HeaderTable title="Pedidos">                
                    <Search className="size-4 text-emerald-300"/>
                    <input
                        onChange={onSearchInputChange} 
                        value={search}                                            
                        className="bg-transparent outline-none border-0 p-0 text-sm focus:ring-0" 
                        placeholder="Buscar pedido por cliente" 
                    />
                </HeaderTable>
                <div className="border bg-white/10 rounded-lg p-2 hover:bg-zinc-900 font-semibold">
                    <button className="flex items-center px-2">
                        <Plus className="size-5" />
                        <span>Novo pedido</span>
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
                                <TableHeaderTh>Número pedido</TableHeaderTh>
                                <TableHeaderTh>Data do pedido</TableHeaderTh>
                                <TableHeaderTh>Cliente</TableHeaderTh>
                                <TableHeaderTh>Status</TableHeaderTh>
                                <TableHeaderTh>Tipo do pagamento</TableHeaderTh>
                                <TableHeaderTh>Status do pagamento</TableHeaderTh>
                                <TableHeaderTh>Tipo do pedido</TableHeaderTh>
                                <TableHeaderTh>Ações</TableHeaderTh>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((order) => (
                                    <TableRow key={order.id}>
                                        <TableCellTd>
                                            <input type="checkbox" className={classNames("", "")}/>
                                        </TableCellTd>
                                        <TableCellTd>{order.id}</TableCellTd>
                                        <TableCellTd>{order.dateSale}</TableCellTd>
                                        <TableCellTd>{order.partner.name}</TableCellTd>
                                        <TableCellTd>{order.status}</TableCellTd>
                                        <TableCellTd>{order.typePayment}</TableCellTd>
                                        <TableCellTd>{order.statusPayment}</TableCellTd>
                                        <TableCellTd>{order.typeSale}</TableCellTd>
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
                                <TableCellTd colSpan={3}>Mostrando {orders.length} de {total} itens</TableCellTd>
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
                    <h1 className="font-semibold border-b border-white/10 p-2">Items do pedido</h1>
                    {
                        /*orders.map((order) => (
                            order.amount < 2 ? (
                                <div className="py-2">
                                    <p className="font-semibold">{order.name}</p>
                                    <span className="text-sm text-red-500">
                                        <b>{order.amount}</b> em estoque
                                    </span>
                                </div>
                            ) : ("")
                        ))*/
                    }                    
                    
                </div>
           
            </div> 

        </div>
    )
}