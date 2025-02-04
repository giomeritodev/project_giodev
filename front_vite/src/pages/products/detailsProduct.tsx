import { Button } from "@/components/ui/button";
import { Pencil, Save, Undo2, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { UseProduct } from "./hooks/useProduct";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ProductCreateSchema } from "./newProduct";
import { UseUnit } from "../unities/hooks/useUnit";
import { UseCategory } from "../categories/hooks/useCategory";
import { HookFunctionsUtils } from "@/lib/functionsUtils";


export function DetailsProduct(){

    const {buttonStatus, statusButton, statusButtonCancel} = HookFunctionsUtils();
    
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

    useEffect(() => {
        findByProduct(Number(query.id))
    }, [product])

    function handleEditProduct({name, barCode}: ProductCreateSchema){
        console.log(name, barCode)
    }

    return(
        <div>
            <form onSubmit={() => handleEditProduct}>

                <div className="md:flex justify-between">
                    <div className="mb-2">
                        <h1>Detalhes produto</h1>
                    </div>
                    <div>
                        <div className="md:flex sm:flex md:justify-between md:gap-4 sm:gap-4">
                            <div>
                                <Button className="w-full mb-2" type="button" onClick={statusButton}>
                                    <Pencil /> 
                                    Editar
                                </Button>
                            </div>
                            <div>
                                <Button className="w-full mb-2" type="submit" disabled={buttonStatus}>
                                    <Save /> 
                                    Salvar
                                </Button>
                            </div>
                            <div>
                                <Link to={"/produtos"}>
                                    <Button className="w-full mb-2" type="button">
                                        <Undo2 />
                                        Voltar
                                    </Button>
                                </Link>
                            </div>
                            <div>
                                <Button className="w-full mb-2  " disabled={buttonStatus} onClick={statusButtonCancel}>
                                    <X />                                 
                                    Cancelar
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

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
                                disabled={buttonStatus}
                                defaultValue={product?.name}
                                //value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <Label htmlFor="barCode">Código de barras</Label>
                            <Input
                                id="barCode" 
                                disabled={buttonStatus}
                                defaultValue={product?.barCode}
                                //value={barCode}
                                onChange={(e) => setBarCode(e.target.value)}
                            />
                        </div>
                        <div>
                            <Label htmlFor="reference">Referência</Label>
                            <Input 
                                id="reference"
                                disabled={buttonStatus}
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
                                disabled={buttonStatus}
                                defaultValue={product?.costPrice}
                                //value={costPrice}
                                onChange={(e) => setCostPrice(Number(e.target.value))}
                            />
                        </div>
                        <div>
                            <Label htmlFor="price">Valor de venda</Label>
                            <Input
                                id="price" 
                                disabled={buttonStatus}
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
                                disabled={buttonStatus}
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
                                disabled={buttonStatus}
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