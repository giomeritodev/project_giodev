import { useEffect, useState } from "react";
import { api } from "../../../lib/api";

export interface UnitType {
    id: number,
    name: string,
    sigla: string,
}

export function UseUnit(){

    const [name, setName] = useState("");
    const [sigla, setSigla] = useState("");
    const [unities, setUnities] = useState<UnitType[]>([]);

    async function findAllUnit(){
        try {
            await api.get("/unit").then(response => {
                setUnities(response.data);
            })
        } catch (error) {
            
        }
    }

    useEffect(() => {
        findAllUnit();
    }, [])

    return {
        name,
        sigla,
        setName,
        setSigla,
        unities,
    }
}