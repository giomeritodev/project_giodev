import { Link, useParams } from "react-router-dom"
import { UseProduct } from "./hooks/useProduct";
import { useEffect } from "react";
import { Button } from "../../components/button/button";
import { HiOutlineReply } from "react-icons/hi";

export function ListProduct(){
   
    const query = useParams();

    const { product, findByProduct } = UseProduct();
    const total = Number(product?.price) * Number(product?.amount)

    useEffect(() => {
        findByProduct(Number(query.id))
    }, [product])

    return (
        <div className="flex flex-row gap-2">
            <div className="border border-white/10 px-5 py-5 rounded-lg flex-1">

                <h1>Codigo {product?.id}</h1>
                                
                <div className="flex flex-wrap -mx-3 mb-6 p-10">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label>Descrição do Item</label>
                        <input 
                            type="text" 
                            value={product?.name} 
                            className="bg-zinc-900 appearance-none block w-full border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none text-gray-50"
                        />
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label>Código de Barras</label>
                        <input 
                            type="text" 
                            value={product?.barCode} 
                            className="bg-zinc-900 appearance-none block w-full border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none text-gray-50"
                        />
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label>Referência</label>
                        <input 
                            type="text" 
                            value={product?.reference} 
                            className="bg-zinc-900 appearance-none block w-full border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none text-gray-50"
                        />
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label>Valor de venda</label>
                        <input 
                            type="text" 
                            value={product?.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} 
                            className="bg-zinc-900 appearance-none block w-full border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none text-gray-50"
                        />
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label>Quantidade em estoque</label>
                        <input 
                            type="text" 
                            value={product?.amount} 
                            className="bg-zinc-900 appearance-none block w-full border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none text-gray-50"
                        />
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label>Unidade de Medida</label>
                        <input 
                            type="text" 
                            value={product?.unit?.sigla} 
                            className="bg-zinc-900 appearance-none block w-full border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none text-gray-50"
                        />
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label>Categoria</label>
                        <input 
                            type="text" 
                            value={product?.category?.name} 
                            className="bg-zinc-900 appearance-none block w-full border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none text-gray-50"
                        />
                    </div>
                </div>
                
                <h2>Valor total em estoque: {total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</h2>

                <div className="flex items-center gap-2 mt-8">
                    <Link to={"/produtos"}>
                        <Button variant="secondary">
                            Voltar
                            <HiOutlineReply />
                        </Button>
                    </Link>
                    
                   
                    
                </div>
            </div>
        </div>
    )
}