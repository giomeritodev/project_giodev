import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button/button";
import { HiOutlinePlus, HiOutlineReply } from "react-icons/hi";
import { UseUnit } from "./hooks/useUnit";




export function NewUnit(){
    const {     
        createUnit,        
        register,
        handleSubmit,
        errors
    } = UseUnit()
    
    return(
        <div className="flex flex-row gap-2">
            <div className="border border-white/10 px-2 py-2 rounded-lg flex-1">
                <div className="flex justify-between">
                    <h1>Unidade de medida</h1>
                    <div>
                        <Link to={"/unidades"}>
                            <Button variant="secondary">
                                Voltar
                                <HiOutlineReply />
                            </Button>
                        </Link>
                    </div>
                </div>

                <main className="h-4/5 bg-zinc-800 flex flex-col items-center justify-center gap-2">
                    <form 
                        className="flex flex-col gap-4"
                        onSubmit={handleSubmit(createUnit)}
                    >
                        
                        <div className="flex flex-col gap-1">
                            <label>Unidade de medida</label>
                            <input 
                                type="text"                            
                                className="bg-zinc-900 appearance-none block w-full border border-gray-500 py-3 px-4 leading-tight focus:outline-none text-gray-50 rounded-xl" 
                                {...register("name")}
                                // onChange={(e) => setName(e.target.value)}
                            />
                            {errors.name && <span className="text-red-600 text-sm">{errors.name.message}</span>}
                        </div>
                        <div className="flex flex-col gap-1">
                            <label>Sigla</label>
                            <input
                                type="text"
                                className="bg-zinc-900 appearance-none block w-full border border-gray-500 py-3 px-4 leading-tight focus:outline-none text-gray-50 rounded-xl" 
                                {...register("sigla")}
                                // onChange={(e) => setSigla(e.target.value)}
                            />
                            {errors.sigla && <span className="text-red-600 text-sm">{errors.sigla.message}</span>}
                        </div>                       

                        <div className="flex flex-col gap-1">
                            <Button type="submit">
                                Salvar
                                <HiOutlinePlus />
                            </Button>                    
                        </div>

                    </form>
                </main>               
            </div>
        </div>
    )
}