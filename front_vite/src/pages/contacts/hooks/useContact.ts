import { useEffect, useState } from "react"
import { ContactType } from "../entities/contactEntity"
import { api } from "@/lib/api"
import { toast } from "react-toastify"


export function UseContact(){

    const [fone, setFone] = useState("")
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [position, setPosition] = useState("")
    const [partnerId, setPartnerId] = useState(0)
    const [contacts, setContacts] = useState<ContactType[]>([])

    async function findAllContactsInPartner(id: number){
        try {
            await api.get(`/contact/partner/${id}`).then(response => {
                setContacts(response.data);
            })
        } catch (error) {
            toast.error("Ops; houve um erro ao carregar os contatos.")
        } 
    }

    async function deleteContact(id: number){
        try {
            await api.delete(`/contact/delete/${id}`).then(response => {
                toast.success("Contato deletado com sucesso.");
                return setContacts(response.data)
            })
        } catch (error) {
            toast.error("Ops; houve um erro ao deletar o contato.");
            return error;
        }
    }
    
    // useEffect(() => {}, [partnerId])

    return {
        fone,
        email,
        name,
        position,
        partnerId,
        setFone,
        setEmail,
        setName,
        setPosition,
        setPartnerId,
        findAllContactsInPartner,
        contacts,
        deleteContact,
    }
}