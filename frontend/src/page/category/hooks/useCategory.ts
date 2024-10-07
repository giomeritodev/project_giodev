import { useEffect, useState } from "react"
import { api } from "../../../lib/api";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const createCategoryFormSchema = z.object({
    id: z.number().optional(),
    name: z.string()
        .nonempty("Nome da categoria é obrigatório.")
        .transform(name => {
            return name.trim().split(' ').map(word => {
                return word[0].toLocaleUpperCase().concat(word.substring(1))
            }).join(' ')
        }),
})

type CreateCategoryFormData = z.infer<typeof createCategoryFormSchema>

export function UseCategory() {
    const navigate = useNavigate()

    const [categories, setCategories] = useState<CreateCategoryFormData[]>([])

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<CreateCategoryFormData>({
        resolver: zodResolver(createCategoryFormSchema)
    })

    async function createCategory({name}: CreateCategoryFormData){
        try {
            await api.post("/category", {name}).then(res => {
                setCategories(res.data);
                toast.success("Categoria cadastrada!")
                navigate("/categorias")
            })
        } catch (error) {
            toast.error("Ops, houve um erro ao cadastrar categoria!")
        }
    }

    async function findAllCategory(){     

        try {
            await api.get("/category").then(response => {
                setCategories(response.data);
            })
        } catch (error) {
            
        }
    }

    useEffect(() => {
        findAllCategory();
    }, [categories])


    return {
        createCategory,
        handleSubmit,
        errors,
        register,
        categories,        
    }
}