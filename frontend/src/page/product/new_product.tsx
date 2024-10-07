import { HiOutlinePlus, HiOutlineX, HiSave } from "react-icons/hi";
import { Button } from "../../components/ui/button/button";
import { UseProduct } from "./hooks/useProduct";
import { UseCategory } from "../category/hooks/useCategory";
import { UseUnit } from "../unit/hooks/useUnit";
import { InputVisao } from "../../components/ui/input";
import { SelectVisao } from "../../components/ui/select";
import { LabelVisao } from "../../components/ui/label";
import InputMoney from "../../components/ui/inputMoney/inputMoney";
import { Link } from "react-router-dom";


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
                <div>
                    <h1 className="font-semibold text-2xl">Novo produto</h1>
                </div>

                <div className="flex flex-row gap-2">

                    <div className="border border-white/10 px-5 py-5 rounded-lg flex-1">

                        <form className="w-full">
                            <div className="flex flex-wrap -mx-3 mb-6 p-10">
                                
                                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">

                                    <LabelVisao>Nome</LabelVisao>
                                    <InputVisao                                         
                                        type="text" 
                                        placeholder="Descrição do item"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />

                                </div>
                                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">

                                    <LabelVisao>Código de Barras</LabelVisao>
                                    <InputVisao                                         
                                        type="text" 
                                        placeholder="Código de barras"
                                        value={barCode}
                                        onChange={(e) => setBarCode(e.target.value)}
                                    />

                                </div>

                                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">

                                    <LabelVisao>Referência</LabelVisao>
                                    <InputVisao                                         
                                        type="text" 
                                        placeholder="Informe o código do fabricante"
                                        value={reference}
                                        onChange={(e) => setReference(e.target.value)}
                                    />

                                </div>

                                <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">

                                    <LabelVisao>Valor de venda</LabelVisao>
                                    <InputMoney
                                        addonBefore="R$"
                                        value={price}                                    
                                        onChange={(e) => setPrice(Number(e.target.value || 0))}
                                    />                                   

                                </div>

                                <div className="w-full md:w-1/6 px-3 mb-6 md:mb-0">

                                    <LabelVisao>Estoque</LabelVisao>
                                    <InputVisao disabled                                        
                                        type="number" 
                                        placeholder="0"
                                        value={amount}
                                        onChange={(e) => setAmount(Number(e.target.value || 0))}
                                    />

                                </div>

                                <div className="flex items-center justify-between w-full md:w-1/1 px-3 md:mb-0 gap-2">
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
                                    <Link to={"/unidades/novo"}>
                                        <Button className="flex-1 px-3">
                                            <HiOutlinePlus />
                                        </Button>
                                    </Link>
                                </div>

                                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">

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
        </div>
    )
}