import { FormEvent, useState } from "react";
import { api } from "../../../lib/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";



export function UseProduct(){

    const navigate = useNavigate();

    const [barCode, setBarCode] = useState("");
    const [reference, setReference] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [amount, setAmount] = useState(0);
    const [unitId, setUnitId] = useState(0);
    const [categoryId, setCategoryId] = useState(0);

    //const [products, setProducts] = useState<ProductType[]>([])

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
    }
}