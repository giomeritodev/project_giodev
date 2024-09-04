import { HiOutlineX, HiSave } from "react-icons/hi";
import { Button } from "../../components/button/button";
import { UseProduct } from "./hooks/useProduct";
import { UseCategory } from "../category/hooks/useCategory";
import { UseUnit } from "../unit/hooks/useUnit";



export function ProductNew(){
    const {
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
    } = UseProduct();

    const { categories } = UseCategory();
    const { unities } = UseUnit();

    return (
        <div>
            <div>
                <h1 className="font-semibold text-2xl">Novo produto</h1>
            </div>

            <div className="flex flex-row gap-2">

                <div className="border border-white/10 px-5 py-5 rounded-lg flex-1">

                    <form className="w-full">
                        <div className="flex flex-wrap -mx-3 mb-6 p-10">
                            
                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">

                                <label className="block uppercase tracking-wide text-gray-50 text-xs font-bold mb-2">
                                    Nome
                                </label>
                                <input
                                    className="bg-zinc-900 appearance-none block w-full border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none text-gray-50" 
                                    type="text" 
                                    placeholder="Descrição do item"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />

                            </div>
                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">

                                <label className="block uppercase tracking-wide text-gray-50 text-xs font-bold mb-2">
                                    Código de Barras
                                </label>
                                <input
                                    className="bg-zinc-900 appearance-none block w-full border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none text-gray-50" 
                                    type="text" 
                                    placeholder="Código de barras"
                                    value={barCode}
                                    onChange={(e) => setBarCode(e.target.value)}
                                />

                            </div>

                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">

                                <label className="block uppercase tracking-wide text-gray-50 text-xs font-bold mb-2">
                                    Referência
                                </label>
                                <input
                                    className="bg-zinc-900 appearance-none block w-full border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none text-gray-50" 
                                    type="text" 
                                    placeholder="Informe o código do fabricante"
                                    value={reference}
                                    onChange={(e) => setReference(e.target.value)}
                                />

                            </div>

                            <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">

                                <label className="block uppercase tracking-wide text-gray-50 text-xs font-bold mb-2">
                                    Valor de venda
                                </label>
                                <input
                                    className="bg-zinc-900 appearance-none block w-full border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none text-gray-50" 
                                    type="number" 
                                    placeholder="Informe o valor"
                                    value={price}
                                    onChange={(e) => setPrice(Number(e.target.value))}
                                />

                            </div>

                            <div className="w-full md:w-1/6 px-3 mb-6 md:mb-0">

                                <label className="block uppercase tracking-wide text-gray-50 text-xs font-bold mb-2">
                                    Estoque
                                </label>
                                <input
                                    disabled
                                    className="bg-zinc-900 appearance-none block w-full border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none text-gray-50"
                                    type="number" 
                                    placeholder="0"
                                    value={amount}
                                    onChange={(e) => setAmount(Number(e.target.value))}
                                />

                            </div>

                            <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">

                                <label className="block uppercase tracking-wide text-gray-50 text-xs font-bold mb-2">
                                    Unidade de Medida
                                </label>
                                <select 
                                    className="bg-zinc-900 appearance-none block w-full border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none text-gray-50"
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
                                </select>
                            </div>

                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">

                                <label className="block uppercase tracking-wide text-gray-50 text-xs font-bold mb-2">
                                    Categoria
                                </label>
                                <select 
                                    className="bg-zinc-900 appearance-none block w-full border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none text-gray-50"
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
                                </select>
                            </div>
                            
                        </div>

                        <div className="p-10 flex gap-3">
                            
                        <Button onClick={createProduct}>
                                SALVAR
                                <HiSave size="20px"/>                                                                                                                                                                                                                                                                                                                                                            
                        </Button>

                        <Button variant="secondary" onClick={cancel}>
                                CANCELAR
                                <HiOutlineX size="20px" color="red"/>                                                                                                                                                                                                                                                                                                                                                            
                        </Button>

                        </div>

                    </form>              
                </div>                        
            </div>
        </div>
    )
}