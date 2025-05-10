import { Button } from "@/components/ui/button";
import { Pencil, Save, Undo2, X } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { UseProduct } from "./hooks/useProduct";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ProductCreateSchema } from "./newProduct";
import { UseUnit } from "../unities/hooks/useUnit";
import { UseCategory } from "../categories/hooks/useCategory";
import { HookFunctionsUtils } from "@/lib/functionsUtils";
import { HeaderPage } from "@/components/header/header-page";


export function DetailsProduct(){
    
    const [buttonStatus, setButtonStatus] = useState<boolean>(true);

    const {product, findByProduct} = UseProduct();
    const query = useParams();
    
    const {unities} = UseUnit();
    const {categories} = UseCategory();
   

    const [name, setName] = useState(product?.name);
    const [barCode, setBarCode] = useState(product?.barCode);
    const [reference, setReference] = useState(product?.reference);
    const [costPrice, setCostPrice] = useState(product?.costPrice);
    const [price, setPrice] = useState(product?.price);
    const [amount, setAmount] = useState(product?.amount);
    const [unitId, setUnitId] = useState(product?.unitId);
    const [categoryId, setCategotyId] = useState(product?.categoryId);

    const {activeInputsStatus, setActiveInputsStatus, statusButton} = HookFunctionsUtils()
    
    function statusActiveInputs(event: FormEvent){
        setActiveInputsStatus(false);
        statusButton(event);
    }
    

    useEffect(() => {
        findByProduct(Number(query.id))
    }, [product])

    function handleEditProduct({name, barCode}: ProductCreateSchema){
        console.log(name, barCode)
    }

    return(
        <div>
            <form onSubmit={() => handleEditProduct}>

                <HeaderPage
                    editInputs={(e) => statusActiveInputs(e)}                    
                    title="Pagina de detalhes de produtos"
                    url="/produtos"
                />

                <div>
                    <div>
                        <div>
                            <Label htmlFor="id">Código</Label>
                            <Input 
                                id="id"
                                disabled
                                defaultValue={product?.id}
                            />
                        </div>
                        <div>
                            <Label htmlFor="name">Descrição do item</Label>
                            <Input 
                                disabled={activeInputsStatus}
                                defaultValue={product?.name}
                                // value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <Label htmlFor="barCode">Código de barras</Label>
                            <Input
                                id="barCode" 
                                disabled={activeInputsStatus}
                                defaultValue={product?.barCode}
                                //value={barCode}
                                onChange={(e) => setBarCode(e.target.value)}
                            />
                        </div>
                        <div>
                            <Label htmlFor="reference">Referência</Label>
                            <Input 
                                id="reference"
                                disabled={activeInputsStatus}
                                defaultValue={product?.reference}
                                //value={reference}
                                onChange={(e) => setReference(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <Label htmlFor="costPrice">Valor de compra</Label>
                            <Input 
                                id="costPrice"
                                disabled={activeInputsStatus}
                                defaultValue={product?.costPrice}
                                //value={costPrice}
                                onChange={(e) => setCostPrice(Number(e.target.value))}
                            />
                        </div>
                        <div>
                            <Label htmlFor="price">Valor de venda</Label>
                            <Input
                                id="price" 
                                disabled={activeInputsStatus}
                                defaultValue={product?.price}
                                //value={price}
                                onChange={(e) => setPrice(Number(e.target.value))}
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <Label htmlFor="amount">Estoque</Label>
                            <Input
                                id="amount" 
                                disabled={activeInputsStatus}
                                defaultValue={product?.amount}
                                //value={amount}
                                onChange={(e) => setAmount(Number(e.target.value))}
                            />
                        </div>
                    </div>
                    <div className="sm:flex gap-4 justify-normal mb-4">
                        <div className="sm:w-1/2 mb-4">
                            <Label htmlFor="unitId">Unidade de medida</Label>
                            <select
                                disabled={activeInputsStatus}
                                className="w-full h-10 rounded-lg"
                                id="unitId"
                                defaultValue={product?.unitId}
                                //value={unitId}
                                onChange={(e) => setUnitId(Number(e.target.value))}
                            >                                
                                <option value={product?.unitId}>{product?.unit.sigla}</option>
                                {
                                    unities.map(unit => (
                                        <option value={unit.id}>{unit.sigla}</option>
                                    ))
                                }        
                            </select>
                            
                        </div>
                        <div className="sm:w-1/2">
                            <Label htmlFor="categoryId">Categoria</Label>
                            <select
                                disabled={buttonStatus}
                                className="w-full h-10 rounded-lg"
                                id="categoryId"
                                defaultValue={product?.categoryId}
                                //value={categoryId}
                                onChange={(e) => setCategotyId(Number(e.target.value))}
                            >
                                <option value={product?.categoryId}>{product?.category.name}</option>
                                {
                                    categories.map(category => (
                                        <option value={category.id}>{category.name}</option>
                                    ))
                                }                             
                            </select>
                            
                        </div>
                    </div>
                </div>

            </form>
        </div>
    )
}