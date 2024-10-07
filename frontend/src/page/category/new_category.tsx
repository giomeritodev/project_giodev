import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button/button";
import { HiOutlineReply } from "react-icons/hi";
import { UseCategory } from "./hooks/useCategory";
import { LabelVisao } from "../../components/ui/label";
import { InputVisao } from "../../components/ui/input";
import { Plus } from "lucide-react";



export function NewCategory(){

    const {
        createCategory,
        handleSubmit,
        errors,
        register,
        categories,     
    } = UseCategory()

    return (
        <div className="flex flex-col gap-8">

            <div className="flex flex-row ga-2">
                <div className="border border-white/10 px-5 py-5 rounded-lg flex-1">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1>Categoria</h1>
                        </div>
                        
                        <div>
                            <Link to={"/categorias"}>
                                <Button variant="secondary">
                                        Voltar
                                        <HiOutlineReply size={20} />
                                </Button>
                            </Link>  
                            
                        </div>            
                    </div>
                </div>                
            </div>

            <div className="flex flex-row ga-2">
                <div className="border border-white/10 px-5 py-5 rounded-lg flex-1">
                    <form onSubmit={handleSubmit(createCategory)} className="">
                        <div className="">
                            <LabelVisao>Categoria</LabelVisao>
                            <input
                                className="bg-zinc-900 appearance-none block w-full border border-gray-500 py-3 px-4 leading-tight focus:outline-none text-gray-50 rounded-xl" 
                                {...register("name")}
                            />
                            {errors.name && <span className="text-red-600 text-sm">{errors.name.message}</span>}
                        </div>

                        <div className="mt-5">
                            <Button type="submit">
                                SALVAR
                                <Plus size={20} /> 
                            </Button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}