import {z} from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
 } from "@/components/ui/select";

export const productCreateSchema = z.object({
    id: z.number().optional(),
    name: z.string()
    .min(3, "Por favor informe um nome valido.").toLowerCase(),
    // .transform(name => {
    //     return name.trim().split(' ').map(word => {
    //         return word[0].toLocaleLowerCase().concat(word.substring(1))    
    //     }).join(' ')
    // }),
    
    barCode: z.string().max(13, "Favor informar no maximo 13 caracteres."),
    reference: z.string().min(3, "Informe uma referencia valida"),
    amount: z.number().int().nullable(),
    costPrice: z.coerce.number().min(0.01, "Valor é obrigatório"),
    price: z.coerce.number().min(0.01, "Valor é obrigatório"),
    unitId: z.number().min(1, "Informe um valor valido"),
    categoryId: z.number().min(1, "Informe um valor valido"),
});

export type ProductCreateSchema = z.infer<typeof productCreateSchema>

export function NewProduct(){
    
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

    function handleCreateProduct(data: ProductCreateSchema) {
        console.log(data);
    }

    function clearAllData(){
        
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
                                Salvar
                            </Button>
                            <Button
                                onClick={clearAllData} 
                                className="bg-zinc-500 hover:bg-zinc-600 hover:text-[1rem] hover:font-semibold sm:w-32 sm:h-10"
                            >
                                Limpar
                            </Button>
                        </div>
                    </div>

                    <div className="mb-4">
                        <Label>Descrição do item</Label>
                        <Input
                            autoFocus 
                            {...register("name")}
                        />
                        {errors.name && <p className="text-red-600">{errors.name.message}</p>}
                    </div>
                    <div className="sm:flex gap-4 mb-4">
                        <div className="sm:w-1/2">
                            <Label>Código de barras</Label>
                            <Input 
                                {...register("barCode")}
                            />                        
                            {errors.barCode && <p className="text-red-600">{errors.barCode.message}</p>}
                        </div>
                        <div className="sm:w-1/2">
                            <Label>Referência</Label>
                            <Input                                 
                                {...register("reference")}
                            />
                            {errors.reference && <p className="text-red-600">{errors.reference.message}</p>}
                        </div>                    
                    </div>
                    <div className="sm:flex gap-4 mb-4">
                        <div className="sm:w-1/4">
                            <Label>Valor de compra</Label>
                            <Input                                
                                {...register("costPrice")}
                            />
                            {errors.costPrice && <p className="text-red-600">{errors.costPrice.message}</p>}
                        </div>
                        <div className="sm:w-1/4">
                            <Label>Valor de venda</Label>
                            <Input 
                                {...register("price")}
                            />
                            {errors.price && <p className="text-red-600">{errors.price.message}</p>}
                        </div>
                        <div className="sm:w-1/4">
                            <Label>Estoque</Label>
                            <Input 
                                {...register("amount")}
                            />
                            {errors.amount && <p className="text-red-600">{errors.amount.message}</p>}
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
                </form>

        </div>
    )
}