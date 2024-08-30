


export function ProductNew(){

    return (
        <div>
            <div>
                <h1 className="font-semibold text-2xl">Novo produto</h1>
            </div>

            <div className="py-10">

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
                            />

                        </div>

                        <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">

                            <label className="block uppercase tracking-wide text-gray-50 text-xs font-bold mb-2">
                                Unidade de Medida
                            </label>
                            <select className="bg-zinc-900 appearance-none block w-full border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none text-gray-50">
                                <option>Selecione uma opção!</option>

                            </select>
                        </div>

                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">

                            <label className="block uppercase tracking-wide text-gray-50 text-xs font-bold mb-2">
                                Categoria
                            </label>
                            <select className="bg-zinc-900 appearance-none block w-full border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none text-gray-50">
                                <option>Selecione uma opção!</option>
                                
                            </select>
                        </div>
                        
                    </div>
                </form>

            </div>
        </div>
    )
}