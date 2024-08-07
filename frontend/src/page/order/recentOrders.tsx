import { Link } from "react-router-dom"
import { getOrderStatus } from "../../lib/utils/getOrderStatus"


const recentOrdersData = [
    {
        id: '1',
        product_id: '4324',
        customer_id: '23143',
        customer_name: 'Shirley A. Lopes',
        order_date: '2022-05-17T03:24:00',
        order_total: 'R$ 435,50',
        current_orders_status: 'PLACED',
        shipment_address: 'Cottage Grove, OR 97424'
    },
    {
        id: '2',
        product_id: '4324',
        customer_id: '23143',
        customer_name: 'Shirley A. Lopes',
        order_date: '2022-05-17T03:24:00',
        order_total: 'R$ 435,50',
        current_orders_status: 'DELIVERED',
        shipment_address: 'Cottage Grove, OR 97424'
    },
    {
        id: '3',
        product_id: '4324',
        customer_id: '23143',
        customer_name: 'Shirley A. Lopes',
        order_date: '2022-05-17T03:24:00',
        order_total: 'R$ 435,50',
        current_orders_status: 'PLACED',
        shipment_address: 'Cottage Grove, OR 97424'
    },
    {
        id: '4',
        product_id: '4324',
        customer_id: '23143',
        customer_name: 'Shirley A. Lopes',
        order_date: '2022-05-17T03:24:00',
        order_total: 'R$ 435,50',
        current_orders_status: 'PLACED',
        shipment_address: 'Cottage Grove, OR 97424'
    },
    {
        id: '5',
        product_id: '4324',
        customer_id: '23143',
        customer_name: 'Shirley A. Lopes',
        order_date: '2022-05-17T03:24:00',
        order_total: 'R$ 435,50',
        current_orders_status: 'PLACED',
        shipment_address: 'Cottage Grove, OR 97424'
    },
    {
        id: '6',
        product_id: '4324',
        customer_id: '23143',
        customer_name: 'Shirley A. Lopes',
        order_date: '2022-05-17T03:24:00',
        order_total: 'R$ 435,50',
        current_orders_status: 'PLACED',
        shipment_address: 'Cottage Grove, OR 97424'
    },
    {
        id: '7',
        product_id: '4324',
        customer_id: '23143',
        customer_name: 'Shirley A. Lopes',
        order_date: '2022-05-17T03:24:00',
        order_total: 'R$ 435,50',
        current_orders_status: 'PLACED',
        shipment_address: 'Cottage Grove, OR 97424'
    },
    {
        id: '8',
        product_id: '4324',
        customer_id: '23143',
        customer_name: 'Shirley A. Lopes',
        order_date: '2022-05-17T03:24:00',
        order_total: 'R$ 435,50',
        current_orders_status: 'PLACED',
        shipment_address: 'Cottage Grove, OR 97424'
    },
    {
        id: '9',
        product_id: '4324',
        customer_id: '23143',
        customer_name: 'Shirley A. Lopes',
        order_date: '2022-05-17T03:24:00',
        order_total: 'R$ 435,50',
        current_orders_status: 'PLACED',
        shipment_address: 'Cottage Grove, OR 97424'
    },
    {
        id: '10',
        product_id: '4324',
        customer_id: '23143',
        customer_name: 'Shirley A. Lopes',
        order_date: '2022-05-17T03:24:00',
        order_total: 'R$ 435,50',
        current_orders_status: 'PLACED',
        shipment_address: 'Cottage Grove, OR 97424'
    },
    {
        id: '11',
        product_id: '4324',
        customer_id: '23143',
        customer_name: 'Shirley A. Lopes',
        order_date: '2022-05-17T03:24:00',
        order_total: 'R$ 435,50',
        current_orders_status: 'PLACED',
        shipment_address: 'Cottage Grove, OR 97424'
    },
    {
        id: '12',
        product_id: '4324',
        customer_id: '23143',
        customer_name: 'Shirley A. Lopes',
        order_date: '2022-05-17T03:24:00',
        order_total: 'R$ 435,50',
        current_orders_status: 'PLACED',
        shipment_address: 'Cottage Grove, OR 97424'
    },
    {
        id: '13',
        product_id: '4324',
        customer_id: '23143',
        customer_name: 'Shirley A. Lopes',
        order_date: '2022-05-17T03:24:00',
        order_total: 'R$ 435,50',
        current_orders_status: 'PLACED',
        shipment_address: 'Cottage Grove, OR 97424'
    },
    {
        id: '14',
        product_id: '4324',
        customer_id: '23143',
        customer_name: 'Shirley A. Lopes',
        order_date: '2022-05-17T03:24:00',
        order_total: 'R$ 435,50',
        current_orders_status: 'PLACED',
        shipment_address: 'Cottage Grove, OR 97424'
    }
]

export function RecentOrders(){
    return(
        <div className="px-4 pt-3 rounded-sm border border-zinc-400 flex-1">
            <strong className="font-medium">Orders</strong>
            <div className="mt-3">
                <table className="w-full border-none">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Código Produto</td>
                            <td>Nome do Cliente</td>
                            <td>Data do Pedido</td>
                            <td>Total do Pedido</td>
                            <td>Endereço compra</td>
                            <td>Status do Pedido</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            recentOrdersData.map(order => (
                               <tr key={order.id}>
                                    <td><Link to={`/order/${order.id}`}>{order.id}</Link></td>
                                    <td><Link to={`/product/${order.product_id}`}>{order.product_id}</Link></td>
                                    <td><Link to={`/custumer/${order.customer_name}`}>{order.customer_name}</Link></td>
                                    <td>{new Date(order.order_date).toLocaleDateString()}</td>
                                    <td>{order.order_total}</td>
                                    <td>{order.shipment_address}</td>
                                    <td>{getOrderStatus(order.current_orders_status)}</td>
                               </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            
        </div>
    )
}