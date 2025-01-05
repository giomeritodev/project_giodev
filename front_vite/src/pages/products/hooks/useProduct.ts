import { ProductType } from './../entities/ProductEntity';
import { api } from '@/lib/api';
import { useEffect, useState } from "react"
import { toast } from 'react-toastify';


export function UseProduct(){

    const [products, setProducts] = useState<ProductType[]>([]);
    const [product, setProduct] = useState<ProductType>();

    async function findAllProducts(){
        try {
            await api.get("/product/all").then(response => {
                setProducts(response.data);
            })
        } catch (error) {
            toast.error("Ops; Houve um erro ao listar todos os itens cadastrados.")
        }
    }

    async function findByProduct(id: number){
        try {
            await api.get(`/product/${id}`).then(response => {
                setProduct(response.data);
            })
        } catch (error) {
            
        }
    }

    useEffect(() => {
        findAllProducts();
    }, [products])

    return {
        products,
        product,
        findByProduct
    }
}