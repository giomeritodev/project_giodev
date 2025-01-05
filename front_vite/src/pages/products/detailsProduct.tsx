import { Button } from "@/components/ui/button";
import { Pencil, Save, Undo2 } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { UseProduct } from "./hooks/useProduct";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ProductCreateSchema, productCreateSchema } from "./newProduct";


export function DetailsProduct(){
    
    const {product, findByProduct} = UseProduct();
    const query = useParams();
    const [buttonStatus, setButtonStatus] = useState<boolean>(true)

    const { register, handleSubmit, formState: {errors} } = useForm<ProductCreateSchema>({
        resolver: zodResolver(productCreateSchema),
        defaultValues: {
            id: product?.id,
            name: product?.name,
            barCode: product?.barCode,
            reference: product?.reference,
            amount: product?.amount,
            costPrice: product?.costPrice,
            price: product?.price,
            unitId: product?.unitId,
            categoryId: product?.categoryId,
        } 
    });

    function statusButton(event: FormEvent){
        event.preventDefault();
        setButtonStatus(false);
    }

    useEffect(() => {
        findByProduct(Number(query.id))
    }, [product])

    function handleEditProduct(data: ProductCreateSchema){
        console.log(data)
    }

    return(
        <div>
            <form {...productCreateSchema} onSubmit={handleSubmit(handleEditProduct)}>

                <div className="flex justify-between">
                    <div>
                        <h1>Detalhes produto</h1>
                    </div>
                    <div>
                        <div className="flex items-center justify-between gap-4">
                            <Button onClick={statusButton}>
                                <Pencil /> 
                                Editar
                            </Button>
                            <Button disabled={buttonStatus}>
                               <Save /> 
                               Salvar
                            </Button>
                            <Link to={"/produtos"}>
                                <Button>
                                    <Undo2 />
                                    Voltar
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <div>
                            <Label>Código</Label>
                            <Input 
                                disabled
                                defaultValue={product?.id}
                                
                                {...register("id")}
                            />
                        </div>
                        <div>
                            <Label>Descrição do item</Label>
                            <Input 
                                disabled={buttonStatus}
                                defaultValue={product?.name}
                                {...register("name")}
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <Label>Código de barras</Label>
                            <Input 
                                disabled={buttonStatus}
                                defaultValue={product?.barCode}
                                {...register("barCode")}
                            />
                        </div>
                        <div>
                            <Label>Referência</Label>
                            <Input 
                                disabled={buttonStatus}
                                defaultValue={product?.reference}
                                {...register("reference")}
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <Label>Valor de compra</Label>
                            <Input 
                                disabled={buttonStatus}
                                defaultValue={product?.costPrice}
                                {...register("costPrice")}
                            />
                        </div>
                        <div>
                            <Label>Valor de venda</Label>
                            <Input 
                                disabled={buttonStatus}
                                defaultValue={product?.price}
                                {...register("price")}
                            />
                        </div>
                    </div>
                    <div className="sm:flex gap-4 justify-normal mb-4">
                        <div className="sm:w-1/2 mb-4">
                            <Label>Unidade de medida</Label>
                            <Select
                                {...register("unitId")}
                            >
                                <SelectTrigger className="sm:w-11/12">
                                    <SelectValue placeholder="Selecione uma unidade de medida" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Unidade de medida</SelectLabel>
                                        <SelectItem value="id2">Unidade</SelectItem>
                                        <SelectItem value="id3">Caixa</SelectItem>
                                        <SelectItem value="id4">Balde</SelectItem>
                                        <SelectItem value="id5">Bombona</SelectItem>
                                        <SelectItem value="id6">Litro</SelectItem>
                                        <SelectItem value="id7">Kilo</SelectItem>
                                        <SelectItem value="id8">Tambor</SelectItem> 
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {errors.unitId && <p className="text-red-600">{errors.unitId.message}</p>}
                        </div>
                        <div className="sm:w-1/2">
                            <Label>Categoria</Label>
                            <Select 
                                {...register("categoryId")}
                            >
                                <SelectTrigger className="sm:w-11/12">
                                    <SelectValue placeholder="Selecione uma categoria" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Categoria</SelectLabel>
                                        <SelectItem value="id1">Peças</SelectItem>
                                        <SelectItem value="id2">Veiculo</SelectItem>
                                        <SelectItem value="id3">Bebida</SelectItem>
                                        <SelectItem value="id4">Comida</SelectItem>                                     
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {errors.categoryId && <p className="text-red-600">{errors.categoryId.message}</p>}
                        </div>
                    </div>
                </div>

            </form>
        </div>
    )
}