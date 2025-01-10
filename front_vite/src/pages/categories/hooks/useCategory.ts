import { useEffect, useState } from "react"
import { CategoryType } from "../entities/categoryEntity"
import { api } from "@/lib/api";
import { toast } from "react-toastify";


export function UseCategory(){

    const [categories, setCategories] = useState<CategoryType[]>([]);
    const [category, setCategory] = useState<CategoryType>();
    
    async function findAllCategories(){
        try {
            await api.get("/category").then(response => {
                setCategories(response.data);
            })    
        } catch (error) {
            toast.error("Ops; Houve um erro ao buscas os dados.")
        }
    }

    async function findByCategory(id: number){
        try {
            await api.get(`/category/${id}`).then(response => {
                setCategory(response.data);
            })
        } catch (error) {
            toast.error("Ops; categoria não encontrada.")
        }
    }

    async function deleteCategory(id: number){
        try {
            await api.delete(`/category/${id}`).then(response => {
                toast.success("Item deletado com sucesso.");
                return response;
            })
        } catch (error) {
            toast.error("Ops; Houve um problema na deleção do item.")
        }
    }

    async function editCategory(id: number, name: string){
        try {
            await api.put(`/category/edit/${id}`, {name}).then(response => {
                toast.success("Dados alterados com sucesso.")
                console.log(response.data)
                return response.data;
            })
        } catch (error) {
            toast.error("Ops; Houve um erro na alteração dos dados.")
        }
    }

    useEffect(() => {
        findAllCategories()
    }, [categories])

    return {
        categories,
        category,
        findByCategory,
        deleteCategory,
        editCategory,
    }
}