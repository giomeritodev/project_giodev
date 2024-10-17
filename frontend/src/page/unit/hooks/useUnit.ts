import { useEffect, useState } from "react";
import { api } from "../../../lib/api";
import {useForm} from 'react-hook-form';
import { z } from 'zod'
import { zodResolver  } from '@hookform/resolvers/zod';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const createUnitFormSchema = z.object({
    id: z.number().optional(),
    name: z.string()
    .nonempty("A descrição da unidade de medida é obrigatório!")
    .transform(name => {
        return name.trim().split(' ').map(word => {
            return word[0].toLocaleUpperCase().concat(word.substring(1))
        }).join(' ')
    }),
    sigla: z.string().max(2, "A sigla deve ter no máximo 2 caracteres").min(2, "A sigla deve ter no minimo 2 caractes"),
    
})

type CreateUnitFormData = z.infer<typeof createUnitFormSchema>

export function UseUnit(){
    const navigate = useNavigate()
    const [unities, setUnities] = useState<CreateUnitFormData[]>([]);
       
    const { 
        register, 
        handleSubmit, 
        formState: {errors},        
    } = useForm<CreateUnitFormData>({
        resolver: zodResolver(createUnitFormSchema)
    });
    
    async function createUnit({name, sigla}: CreateUnitFormData){
        // console.log(data)
        // setOutput(JSON.stringify(data, null, 2))
        try {
            await api.post("/unit", {name, sigla}).then(res => {
                setUnities(res.data);
                toast.success("Unidade cadastrada!") 
                navigate("/unidades")                                                               
            })
        } catch (error) {
            toast.error("Não foi possivel adicionar!")
        }
    }    

    async function findAllUnit(){
        try {
            await api.get("/unit/all").then(response => {
                setUnities(response.data);
            })
        } catch (error) {
            
        }
    }

   

    useEffect(() => {
        findAllUnit();        
    }, [])

    return {
        unities,
        setUnities,
        createUnit,
        register,
        handleSubmit,
        errors,        
    }
}