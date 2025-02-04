import { FormEvent, useEffect, useState } from "react"
import { CityType } from "../entities/cityEntity"
import { api } from "@/lib/api"
import { toast } from "react-toastify"


export function UseCity(){

    const [name, setName] = useState("")
    const [stateId, setStateId] = useState(0)
    const [cities, setCities] = useState<CityType[]>([]);

    async function createCity(e: FormEvent){
        e.preventDefault()
        try {
            await api.post("/city", {name, stateId}).then(response => {
                toast.success("Cidade cadastrada com sucesso.");
                return response;
            })
        } catch (error) {
            toast.error("Ops; não foi possivel fazer o cadastro da cidade.");
            return error;
        }
    }

    async function findAllCities(){
        try {
            await api.get("/city").then(response => {
                setCities(response.data);
            })
        } catch (error) {
            toast.error("Ops; houve um erro na pesquisa dos dados.")
        }
    } 

    async function deleteCity(id: number){
        try {
            await api.delete(`/city/${id}`).then(response => {
                toast.success("Cidade deletada com sucesso.")
                return response;
            })
        } catch (error) {
            toast.error("Ops; Houve um erro ao excluir o item.")
        }
    }

    useEffect(() => {findAllCities()}, [cities])

    return {
        name,
        setName,
        stateId,
        setStateId,
        createCity,
        cities,
        deleteCity,
    }
}