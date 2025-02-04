import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { UseUnit } from "../unities/hooks/useUnit";
import { UseCategory } from "../categories/hooks/useCategory";
import { Save, Undo2 } from "lucide-react";
import { toast } from "react-toastify";
import { api } from "@/lib/api";
import { Link } from "react-router-dom";

export const productCreateSchema = z.object({
    id: z.number().optional(),
    name: z.string()
    .min(3, "Por favor informe um nome valido.").toUpperCase(),
    barCode: z.string().max(13, "Favor informar no maximo 13 caracteres."),
    reference: z.string().min(3, "Informe uma referencia valida"),
    costPrice: z.coerce.number().min(0.01, "Valor é obrigatório"),
    price: z.coerce.number().min(0.01, "Valor é obrigatório"),
    amount: z.coerce.number({message: "Informe um valor valido"}),
    unitId: z.coerce.number({message: "Informe um valor valido"}),
    categoryId: z.coerce.number({message: "Informe um valor valido"}),
});

export type ProductCreateSchema = z.infer<typeof productCreateSchema>

export function NewProduct(){

    const {
        unities
    } = UseUnit();
    const {
        categories
    } = UseCategory();
    
    const { register, handleSubmit, formState: {errors} } = useForm<ProductCreateSchema>({
        resolver: zodResolver(productCreateSchema),
        defaultValues: {
            name: '',
            barCode: '',
            reference: '',
            amount: 0,
            costPrice: 0,
            price: 0,
            unitId: 0,
            categoryId: 0,
        } 
    });

    async function handleCreateProduct({
        name,
        barCode,
        reference,
        amount,
        costPrice,
        price,
        unitId,
        categoryId
    }: ProductCreateSchema) {
        try {            
           await api.post("/product", {name, barCode, reference, amount, costPrice, price, unitId, categoryId}).then(response => {
                toast.success("Item cadastrado com sucesso.");                 
           }) 
        } catch (error) {
            toast.error("Ops; Houve um erro ao cadastrar o produto.")
        }
    }

    function clearAllData(){
        window.location.reload()
    }

    return (
        <div>
            
                <form {...productCreateSchema} onSubmit={handleSubmit(handleCreateProduct)} className="mx-auto">
                    <div className="flex justify-between mb-4 mt-4">
                        <div>
                            <h1 className="text-2xl">Novo cadastro de produto.</h1>
                        </div>
                        <div className="flex gap-4">
                            <Button 
                                className="bg-green-500 hover:bg-green-600 hover:text-[1rem] hover:font-semibold sm:w-32 sm:h-10"
                            >
                                <Save />
                                Salvar
                            </Button>
                            <Button
                                onClick={clearAllData} 
                                className="bg-zinc-500 hover:bg-zinc-600 hover:text-[1rem] hover:font-semibold sm:w-32 sm:h-10"
                            >                                
                                Limpar
                            </Button>
                            <Link to={"/produtos"}>
                                <Button
                                    className="bg-zinc-500 hover:bg-zinc-600 hover:text-[1rem] hover:font-semibold sm:w-32 sm:h-10"
                                >      
                                   <Undo2 />                           
                                    Voltar
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className="mb-4">
                        <Label htmlFor="name">Descrição do item</Label>
                        <Input
                            autoFocus
                            id="name"
                            type="string"
                            {...register("name")}
                        />
                        {errors.name && <p className="text-red-600">{errors.name.message}</p>}
                    </div>
                    <div className="sm:flex gap-4 mb-4">
                        <div className="sm:w-1/2">
                            <Label htmlFor="barCode">Código de barras</Label>
                            <Input
                                id="barCode"
                                type="string" 
                                {...register("barCode")}
                            />                        
                            {errors.barCode && <p className="text-red-600">{errors.barCode.message}</p>}
                        </div>
                        <div className="sm:w-1/2">
                            <Label htmlFor="reference">Referência</Label>
                            <Input          
                                id="reference"         
                                type="string"              
                                {...register("reference")}
                            />
                            {errors.reference && <p className="text-red-600">{errors.reference.message}</p>}
                        </div>                    
                    </div>
                    <div className="sm:flex gap-4 mb-4">
                        <div className="sm:w-1/4">
                            <Label htmlFor="costPrice">Valor de compra</Label>
                            <Input                     
                                id="costPrice"
                                {...register("costPrice")}
                            />
                            {errors.costPrice && <p className="text-red-600">{errors.costPrice.message}</p>}
                        </div>
                        <div className="sm:w-1/4">
                            <Label htmlFor="price">Valor de venda</Label>
                            <Input
                                id="price" 
                                {...register("price")}
                            />
                            {errors.price && <p className="text-red-600">{errors.price.message}</p>}
                        </div>
                        <div className="sm:w-1/4">
                            <Label htmlFor="amount">Estoque</Label>
                            <Input
                                disabled
                                id="amount"
                                {...register("amount")}
                            />
                            {errors.amount && <p className="text-red-600">{errors.amount.message}</p>}
                        </div>
                    </div>
                    <div className="sm:flex gap-4 justify-normal mb-4">
                        <div className="sm:w-1/2 mb-4">
                            <Label htmlFor="unitId">Unidade de medida</Label>
                            <div>
                                <select
                                    className="w-full h-10 rounded-lg"
                                    id="unitId" 
                                    {...register("unitId")}
                                >                                    
                                    <option>Selecione uma unidade de medida</option>
                                    {
                                        unities.map(unit => (
                                            <option key={unit.id} value={unit.id}>{unit.sigla}</option>
                                        ))
                                    }   
                                </select>
                            </div>
                            {errors.unitId && <p className="text-red-600">{errors.unitId.message}</p>}
                        </div>
                        <div className="sm:w-1/2">
                            <Label htmlFor="cateroryId">Categoria</Label>
                            <div>
                                <select
                                    id="categoryId"
                                    className="w-full h-10 rounded-lg p-2"
                                    {...register("categoryId")}
                                >
                                    <option>Selecione uma categoria</option>
                                    {
                                        categories.map(category => (
                                            <option 
                                                
                                                key={category.id} 
                                                value={category.id}
                                            >{category.name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            {errors.categoryId && <p className="text-red-600">{errors.categoryId.message}</p>}
                        </div>
                    </div>
                </form>

        </div>
    )
}