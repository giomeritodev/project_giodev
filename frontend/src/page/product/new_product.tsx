import { UseCategory } from "../category/hooks/useCategory";
import { UseUnit } from "../unit/hooks/useUnit";
import { UseProduct } from "./hooks/useProduct";
import { Button } from "../../components/ui/button/button";
import { HiOutlineX, HiSave } from "react-icons/hi";
import { LabelVisao } from "../../components/ui/label";
import { InputVisao } from "../../components/ui/input";
import { SelectVisao } from "../../components/ui/select";
import InputMoney from "../../components/ui/inputMoney/inputMoney";



export function ProductNew(){
    
    const { categories } = UseCategory();
    const { unities } = UseUnit();
    const {
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
        createProduct,
        cancel,
        control,
    } = UseProduct()

    return (
               
        
        <form>
            <div>
                <div className="flex flex-row gap-2">
                    <div className="w-full flex items-center justify-between mb-4 border border-white/10 px-5 py-5 rounded-lg">
                        <div>
                            <h1 className="font-semibold text-2xl">Novo produto</h1>
                        </div>
                        <div className="p-2 flex gap-2">
                                    
                                    <Button onClick={(e) => createProduct(e)}>
                                            SALVAR
                                            <HiSave size="20px"/>                                                                                                                                                                                                                                                                                                                                                            
                                    </Button>

                                    <Button variant="secondary" onClick={cancel}>
                                            CANCELAR
                                            <HiOutlineX size="20px" color="red"/>                                                                                                                                                                                                                                                                                                                                                            
                                    </Button>

                        </div>
                    </div>
                </div>

                <div className="flex flex-row gap-1">
                    <div className="border border-white/10 px-5 py-5 rounded-lg flex-1">
                   
                            <div className="flex flex-wrap -mx-3 mb-3 p-10">
                                
                                <div className="w-full md:w-1/1 px-3 mb-6 md:mb-0">

                                    <LabelVisao>Nome</LabelVisao>
                                    <InputVisao                                    
                                        type="text"                                        
                                        placeholder="Descrição do item"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}                                        
                                    />
                                </div>
                                <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">

                                    <LabelVisao>Código de Barras</LabelVisao>
                                    <InputVisao                                         
                                        type="text"
                                        placeholder="Código de barras"
                                        value={barCode}
                                        onChange={(e) => setBarCode(e.target.value)}
                                    />
                                    
                                </div>

                                <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">

                                    <LabelVisao>Referência</LabelVisao>
                                    <InputVisao                                         
                                        type="text"
                                        placeholder="Informe o código do fabricante"
                                        value={reference}
                                        onChange={(e) => setReference(e.target.value)}    
                                    />
                                    
                                </div>

                                <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">

                                    <LabelVisao>Valor de compra</LabelVisao>
                                    <InputMoney 
                                        value={costPrice}
                                        onChange={(e) => setCostPrice(Number(e.target.value))}
                                        addonBefore="R$"

                                    />
                                
                                </div>

                                <div className="w-full md:w-1/2 px-3 mb-3 md:mb-0">

                                    <LabelVisao>Valor de venda</LabelVisao>
                                    <InputMoney 
                                        value={price}
                                        onChange={(e) => setPrice(Number(e.target.value))}
                                    />
                                    {/* <input     
                                        type="number"
                                        placeholder="Informe valor do item"                       
                                        className="bg-zinc-800 appearance-none block w-full border border-gray-500 py-3 px-4 mb-3 leading-tight focus:outline-none text-gray-50 rounded-xl"
                                        {...register('price')}
                                    />           */}

                                </div>

                                <div className="w-full md:w-1/2 px-3 md:mb-0">

                                    <LabelVisao>Estoque</LabelVisao>
                                    <InputVisao disabled                                        
                                        type="number"
                                        value={amount}
                                        onChange={(e) => setAmount(Number(e.target.value))}
                                    />
                                    
                                </div>

                                <div className="w-full md:w-1/2 px-3 md:mb-0 gap-2">
                                    <LabelVisao>Unidade de Medida</LabelVisao>
                                    <SelectVisao
                                        value={unitId}
                                        onChange={(e) => setUnitId(Number(e.target.value))}
                                    >
                                        <option>Selecione uma opção!</option>
                                        {
                                            unities.map(unit => {
                                                return (
                                                    <option key={unit.id} value={unit.id}>{unit.name}  -  {unit.sigla}</option>
                                                )
                                            })
                                        }
                                    </SelectVisao>
                                </div>

                                <div className="w-full md:w-1/2 px-3 mb-1 md:mb-0">

                                    <LabelVisao>Categoria</LabelVisao>
                                    <SelectVisao
                                        value={categoryId}
                                        onChange={(e) => setCategoryId(Number(e.target.value))}    
                                    >
                                        <option>Selecione uma opção!</option>                               
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
                    </div>                        
                </div>
            </div>
    </form> 
        
        
        
    )
}