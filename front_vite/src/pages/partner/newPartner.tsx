import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { api } from "@/lib/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { Save, Undo2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { z } from "zod";
import { UseTypePartner } from "../typePartner/hooks/useTypePartner";

const handleCreatePartner = z.object({
    name: z.string().min(3, "Favor informar um valor valido.").toUpperCase(),
    cpfOrCnpj: z.string().max(14, "Favor informar um valor valido."),
    typePartnerId: z.coerce.number(),
})

type HandleCreatePartner = z.infer<typeof handleCreatePartner>

export function NewPartner(){

    const {register, handleSubmit, formState: {errors}} = useForm<HandleCreatePartner>({
        resolver: zodResolver(handleCreatePartner),
        defaultValues: {
            name: "",
            cpfOrCnpj: "",
            typePartnerId: 0,
        }
    })

    const {
        typesPartners
    } = UseTypePartner();

    async function createHandlePartner({name, cpfOrCnpj, typePartnerId}: HandleCreatePartner){
        try {
            await api.post("/partner", {name, cpfOrCnpj, typePartnerId}).then(response => {
                toast.success("Parceiro cadastrado com sucesso.")
                console.log(response.data)
                return response;
            })
        } catch (error) {
            toast.error("Ops; Houve um erro ao cadastrar o parceiro.")
        }
    }

    return (
        <div>
            <form {...handleCreatePartner} onSubmit={handleSubmit(createHandlePartner)}>
                <div className="flex justify-between gap-4">
                    <div>
                        <h1>Novo cadastro de parceiro</h1>
                    </div>

                    <div className="flex gap-4">
                        <Button type="submit">
                            <Save />
                            Salvar
                        </Button>
                        <Link to={"/parceiros"}>
                            <Button type="button">
                                <Undo2 />
                                Voltar
                            </Button>
                        </Link>
                    </div>
                </div>

                <div>
                    <div>
                        <div className="mb-5">
                            <Label htmlFor="name">Nome</Label>
                            <Input 
                                id="name"
                                {...register("name")}
                            />
                            {errors.name && <span className="text-red-600">{errors.name.message}</span>}
                        </div>
                        <div className="sm:flex gap-4">

                            <div className="sm:w-1/2 mb-5">
                                <Label htmlFor="cpfOrCnpj">CPF ou CNPJ</Label>
                                <Input
                                    id="cpfOrCnpj" 
                                    {...register("cpfOrCnpj")}
                                    />
                                {errors.cpfOrCnpj && <span className="text-red-600">{errors.cpfOrCnpj.message}</span>}
                            </div>
                            <div className="sm:w-1/2">
                                <Label htmlFor="typePartnerId">Tipo de parceiro</Label>
                                <div>
                                    <select
                                        className="w-full h-10 rounded-lg"
                                        id="typePartnerId"
                                        {...register("typePartnerId")}
                                    >
                                        <option>Favor escolha uma das opções.</option>
                                        {
                                            typesPartners.map(type => (
                                                <option key={type.id} value={type.id}>{type.name}</option>
                                            ))
                                        }
                                    </select>
                                    {errors.typePartnerId && <span className="text-red-600">{errors.typePartnerId.message}</span>}
                                </div>
                            </div>
                        </div>  
                                              
                    </div>
                </div>
            </form>
        </div>
    )
}