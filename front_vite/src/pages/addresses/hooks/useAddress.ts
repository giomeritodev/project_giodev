import { useState } from "react"
import { AddressType } from "../entities/addressEntity"
import { api } from "@/lib/api"
import { toast } from "react-toastify"


export function UseAddress(){

    const [addresses, setAddresses] = useState<AddressType[]>([])
    const [address, setAddress] = useState<AddressType>()
   

    async function findAllAddressesInPartner(partnerId: number){
        try {
            await api.get(`/address/partner/${partnerId}`).then(response => {
                setAddresses(response.data);
            })
        } catch (error) {
            toast.error("Ops; Houve um erro ao carregar o endereço.")
            return error;
        }
    }

    async function findByAddress(id: number){
        try {
            await api.get(`/address/${id}`).then(response => {
                setAddress(response.data)
            })
        } catch (error) {
            toast.error("Ops; Endereço não encontrado.")
        }
    }

    async function deleteAddress(id: number){
        try {
            await api.delete(`/address/${id}`).then(response => {
                toast.success(`Endereço com código "${id}" deletado com sucesso.`);
                return response;
            })
        } catch (error) {
            toast.error(`Ops; não foi possivel deletar o endereço com o código ${id}.`)
        }
    }

    
    return {
        addresses,
        address,
        findByAddress,
        deleteAddress,
        findAllAddressesInPartner,        
    }
}