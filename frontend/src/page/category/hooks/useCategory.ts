import { useEffect, useState } from "react"
import { api } from "../../../lib/api";

export interface CategoryType {
    id: number,
    name: string,
}

export function UseCategory() {

    const [name, setName] = useState("");
    const [categories, setCategories] = useState<CategoryType[]>([])

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
        name,
        setName,
        categories,        
    }
}