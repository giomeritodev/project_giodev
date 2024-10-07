import { Link, useParams } from "react-router-dom"
import { UseProduct } from "./hooks/useProduct";
import { FormEvent, useEffect, useState } from "react";
import { Button } from "../../components/ui/button/button";
import { HiOutlinePencil, HiOutlineReply, HiOutlineSave } from "react-icons/hi";
import { api } from "../../lib/api";
import { toast } from "react-toastify";
import { InputVisao } from "../../components/ui/input";
import { SelectVisao } from "../../components/ui/select";
import { UseCategory } from "../category/hooks/useCategory";
import { UseUnit } from "../unit/hooks/useUnit";


export function ListProduct(){
    const [status, setStatus] = useState(false);
    const query = useParams();

    const {
        product,
        findByProduct 
    } = UseProduct();
    const {
        categories
    } = UseCategory();
    const {
        unities
    } = UseUnit();
    const [name, setName] = useState(product?.name)
    const [amount, setAmount] = useState(product?.amount)
    const [price, setPrice] = useState(product?.price)
    const [categoryId, setCategoryId] = useState(product?.categoryId)
    const [unitId, setUnitId] = useState(product?.unitId)
    const [barCode, setBarCode] = useState(product?.barCode)
    const [reference, setReference] = useState(product?.reference)


    const total = Number(product?.price) * Number(product?.amount)


    function saveEdit(e: FormEvent){
        e.preventDefault()
        setStatus(true)        
    }



    async function editSave(e: FormEvent){
        e.preventDefault()   
        try {
            await api.put(`/product/edit/${product?.id}`, {name, amount, price, categoryId, unitId, barCode, reference}).then(() => {
                toast.success("Dados alterados com sucesso!");
                setStatus(false)
                
            })
        } catch (error) {
            
        }    
        
    }

    useEffect(() => {
        findByProduct(Number(query.id))
    }, [product])

    return (
        <div className="flex flex-row gap-2">
            <div className="border border-white/10 px-5 py-5 rounded-lg flex-1">

                <form id="formEdit">
                    {
                        product ? (
                            <div>
                            <h1>Codigo {product?.id}</h1>
                                                
                                <div className="flex flex-wrap -mx-3 mb-6 p-10">
                                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                        <label>Descrição do Item</label>
                                        <InputVisao
                                            defaultValue={product.name}
                                            value={name}                             
                                            onChange={(e) => setName(e.target.value)} 
                                        />
                                    </div>
                                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                        <label>Código de Barras</label>
                                        <InputVisao   
                                            defaultValue={product.barCode}                          
                                            value={barCode}      
                                            onChange={(e) => setBarCode(e.target.value)}                         
                                        />
                                    </div>
                                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                        <label>Referência</label>
                                        <InputVisao
                                            defaultValue={product.reference}                              
                                            value={reference} 
                                            onChange={(e) => setReference(e.target.value)}                               
                                        />
                                    </div>
                                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                        <label>Valor de venda</label>
                                    
                                        <InputVisao    
                                            type="number"                      
                                            defaultValue={(product.price)}
                                            value={price}                                 
                                            onChange={(e) => setPrice(Number(e.target.value))}
                                        />
                                    </div>
                                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                        <label>Quantidade em estoque</label>
                                        <InputVisao
                                            defaultValue={product.amount}
                                            value={amount} 
                                            onChange={(e) => setAmount(Number(e.target.value))}
                                        />
                                    </div>
                                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                        <label>Unidade de Medida</label>
                                        <SelectVisao                                        
                                            value={unitId || product?.unitId}
                                            onChange={(e) => setUnitId(Number(e.target.value))}
                                        >
                                            <option value={product?.id}>{product?.unit?.name} - {product?.unit?.sigla}</option>
                                            {
                                                unities.map((unit) => {
                                                    return (
                                                        <option key={unit.id} value={unit.id}>{unit.name}  -  {unit.sigla}</option>
                                                    )
                                                })
                                            }
                                        </SelectVisao>
                                    </div>
                                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                        <label>Categoria</label>
                                        <SelectVisao
                                            defaultValue={product?.categoryId}                                         
                                            value={categoryId}
                                            onChange={(e) => setCategoryId(Number(e.target.value))}
                                        >
                                            <option value={product?.id}>{product?.category?.name}</option>
                                            {
                                                categories.map(cat => {
                                                    return (
                                                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                                                    )
                                                })
                                            }
                                        </SelectVisao>                            
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
                                    <Button onClick={(e) => saveEdit(e)} variant="secondary">
                                            Editar
                                            <HiOutlinePencil />
                                    </Button>
                                    {
                                        status === true ? (
                                            <div>
                                                <Button onClick={(e) => editSave(e)} variant="primary">                 
                                                        Salvar
                                                        <HiOutlineSave />
                                                </Button>
                                            </div>
                                        ) :
                                        (
                                            <div className="invisible">
                                                <Button variant="primary">                 
                                                        Salvar
                                                        <HiOutlineSave />
                                                </Button>
                                            </div>
                                        )
                                    }
                                </div>
                                </div>
                        ) : (
                            <div>
                                <h1>Produto com código " {query.id} " não encontrado! </h1>
                                <div className="mt-10">
                                    <Link to={"/produtos"}>
                                        <Button variant="secondary">
                                            Voltar
                                            <HiOutlineReply />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        )
                    } 
                    
                </form>
            </div>
        </div>
    )
}