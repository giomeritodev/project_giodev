import { FormEvent, useEffect, useState } from "react";
import { api } from "../../../lib/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ProductType } from "../interface/Product";
import { useForm } from "react-hook-form";


export function UseProduct(){

    const navigate = useNavigate();
    const [confirm, setConfirm] = useState(false)
    const [barCode, setBarCode] = useState("")
    const [reference, setReference] = useState("")
    const [name, setName] = useState("")
    const [costPrice, setCostPrice] = useState(0)
    const [price, setPrice] = useState(0)
    const [amount, setAmount] = useState<number>()
    const [unitId, setUnitId] = useState<number>()
    const [categoryId, setCategoryId] = useState<number>()
    const [product, setProduct] = useState<ProductType>();
    const [products, setProducts] = useState<ProductType[]>([]);

    const {
        control
    } = useForm()
    
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
    
    var sumCostPrice = products.reduce(calculateCostPrice, 0);
    function calculateCostPrice(total: number, item: ProductType){
        return total + (item.amount * item.costPrice);
    }

    async function createProduct(event: FormEvent){
        event.preventDefault()
        console.log(barCode, reference, name, costPrice, price, amount, unitId, categoryId)
        try {
            await api.post("/product", 
                {barCode, reference, name, costPrice, price, amount, unitId, categoryId})
            .then(response => {
                console.log(response.data)

                setProducts(response.data)
                navigate("/produtos");
                toast.success("Produto cadastrado!")
                return response;
            })
        } catch (error) {
            toast.error("Houve um erro ao salvar o item")   
            //console.log("Houve um erro ao salvar o item")
        }   
    }    

    async function deleteProduct(id: number | undefined){       
        
            try {
                await api.delete(`/product/${id}`).then(response => {
                    toast.success("Produto deletado!")
                    findAllProducts()
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
        navigate("/produtos");
    }

    useEffect(() => {
        findAllProducts()
    }, [product])
    
 
    return {
        barCode,
        reference,
        name,
        costPrice,
        price,
        amount,
        unitId,
        categoryId,
        setBarCode,
        setReference,
        setName,
        setCostPrice,
        setPrice,
        setAmount,
        setUnitId,
        setCategoryId,
        cancel,
        createProduct,
        deleteProduct,
        findByProduct,
        product,
        products,
        setProducts,
        sum,
        sumCostPrice,
        findAllProducts,
        control,
        setConfirm,
    }
}