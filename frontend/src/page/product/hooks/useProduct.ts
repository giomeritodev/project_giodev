import { FormEvent, useEffect, useState } from "react";
import { api } from "../../../lib/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ProductType } from "../interface/Product";



export function UseProduct(){

    const navigate = useNavigate();

    const [barCode, setBarCode] = useState("");
    const [reference, setReference] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [amount, setAmount] = useState(0)
    const [unitId, setUnitId] = useState(0);
    const [categoryId, setCategoryId] = useState(0);
    const [product, setProduct] = useState<ProductType | undefined>();
    const [products, setProducts] = useState<ProductType[]>([]);

    async function findAllProducts(){
        try {
            await api.get(`/product/all`).then(response => {
                setProducts(response.data);
            })
        } catch (error) {
            toast.error("Erro ao consultar produtos!");
        }
    }

    var sum = products.reduce(calculate, 0);
    function calculate(total: number, item: ProductType){
        return total + (item.amount * item.price);
    }

    async function createProduct(event: FormEvent){
        event.preventDefault();

        try {
            await api.post("/product", {barCode, reference, name, price, amount, unitId, categoryId}).then(response => {
                navigate("/produtos");
                toast.success("Produto cadastrado!")
                return response;
            })
        } catch (error) {
            toast.error("Houve um erro ao salvar o item")   
            console.log("Houve um erro ao salvar o item")
        }   
    }

    

    async function deleteProduct(id: number){
        
        try {
            await api.delete(`/product/${id}`).then(response => {
                toast.success("Produto deletado!")
                return response;
            })
        } catch (error) {
            toast.error("Houve um erro ao deletar o produto.")
        }
    }

    async function findByProduct(id: number){
        try {
            await api.get(`/product/${id}`).then(response => {
                setProduct(response.data);
            })
        } catch (error) {
            toast.error("Produto não existe.");
        }
    }

    function cancel(event: FormEvent){
        event.preventDefault()

        setBarCode(""),
        setReference(""),
        setName(""),
        setPrice(0),
        setAmount(0),
        setUnitId(0),
        setCategoryId(0),

        navigate("/produtos");

    }
    
 
    return {
        barCode,
        reference,
        name,
        price,
        amount,
        unitId,
        categoryId,
        setBarCode,
        setReference,
        setName,
        setPrice,
        setAmount,
        setUnitId,
        setCategoryId,
        cancel,
        createProduct,
        deleteProduct,
        findByProduct,
        product,
        sum,
        findAllProducts
    }
}