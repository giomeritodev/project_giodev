import { Link } from "react-router-dom"

const PopularProductsData = [
    {
        id: '1',
        product_name: 'Refrigerante de 2LT',
        product_thumbnal: 'https://images.stockcake.com/public/5/9/3/593f2d3e-8270-49b2-90fe-3233451809b2_large/bee-on-flower-stockcake.jpg',
        product_price: 'R$ 1499,00',
        product_stock: 341
    },
    {
        id: '2',
        product_name: 'Produto 1',
        product_thumbnal: 'https://images.stockcake.com/public/5/9/3/593f2d3e-8270-49b2-90fe-3233451809b2_large/bee-on-flower-stockcake.jpg',
        product_price: 'R$ 1499,00',
        product_stock: 8
    },
    {
        id: '3',
        product_name: 'Produto 1',
        product_thumbnal: 'https://images.stockcake.com/public/5/9/3/593f2d3e-8270-49b2-90fe-3233451809b2_large/bee-on-flower-stockcake.jpg',
        product_price: 'R$ 1499,00',
        product_stock: 6
    },
    {
        id: '4',
        product_name: 'Produto 1',
        product_thumbnal: 'https://images.stockcake.com/public/5/9/3/593f2d3e-8270-49b2-90fe-3233451809b2_large/bee-on-flower-stockcake.jpg',
        product_price: 'R$ 1499,00',
        product_stock: 1
    },
    {
        id: '5',
        product_name: 'Produto 1',
        product_thumbnal: 'https://images.stockcake.com/public/5/9/3/593f2d3e-8270-49b2-90fe-3233451809b2_large/bee-on-flower-stockcake.jpg',
        product_price: 'R$ 1499,00',
        product_stock: 0
    },
    {
        id: '6',
        product_name: 'Produto 1',
        product_thumbnal: 'https://images.stockcake.com/public/5/9/3/593f2d3e-8270-49b2-90fe-3233451809b2_large/bee-on-flower-stockcake.jpg',
        product_price: 'R$ 560,00',
        product_stock: 23
    },
    {
        id: '7',
        product_name: 'Produto 1',
        product_thumbnal: 'https://images.stockcake.com/public/5/9/3/593f2d3e-8270-49b2-90fe-3233451809b2_large/bee-on-flower-stockcake.jpg',
        product_price: 'R$ 1499,00',
        product_stock: 0
    }
]

export function PopularProducts(){
    return(
        <div className="px-4 pt-3 rounded-sm border border-zinc-400 w-[20rem]">
            <strong className="font-medium">Produtos populares</strong>
            <div className="mt-4 flex flex-col gap-3">
                {PopularProductsData.map(product => (
                    <div>
                        <Link to={`/product/${product.id}`} className="flex justify-between hover:no-underline">
                            <div className="w-10 h-10 min-w-10 bg-gray-200 rounded-sm">
                                <img
                                    className="w-full h-full object-cover rounded-sm overflow-hidden"
                                    src={product.product_thumbnal} 
                                    alt={product.product_name} 
                                />
                            </div>
                            <div>
                                <p className="text-gray-400 font-semibold">{product.product_name}</p>
                                <span className={`text-sm font-medium ${product.product_stock === 0 ? 'text-red-400' : 'text-green-400'}`}>
                                    {product.product_stock === 0 ? "Estoque zerado" : product.product_stock + ' em estoque'}
                                </span>
                            </div>
                            <div className="text-xs text-gray-700">
                                {product.product_price}
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}