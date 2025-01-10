import { useEffect, useState } from "react"
import { FormOfPaymentType } from "../entities/formOfPaymentEntity"
import { api } from "@/lib/api";
import { toast } from "react-toastify";


export function UseFormOfPayment(){

    const [formsOfPayment, setFormsOfPayment] = useState<FormOfPaymentType[]>([])
    const [formOfPayment, setFormOfPayment] = useState<FormOfPaymentType>();

    async function findAllFormOfPayment(){
        try {
            await api.get("/form-of-payment").then(response => {
                setFormsOfPayment(response.data);
            })
        } catch (error) {
            toast.error("Ops; Houve um erro ao buscar os dados.")
        }
    }

    async function findByFormOfPayment(id: number){
        try {
            await api.get(`/form-of-payment/${id}`).then(response => {
                setFormOfPayment(response.data);
            })
        } catch (error) {
            toast.error("Ops; Houve um problema na busca do item.")
        }
    }

    async function deleteFormOfPayment(id: number){
        try {
            await api.delete(`/form-of-payment/${id}`).then(response => {
                toast.success("Item deletado com sucesso.")
                return response;
            })
        } catch (error) {
            toast.error("Ops; Houve um problema na deleção do item.")
        }
    }

    useEffect(() => {
        findAllFormOfPayment();
    }, [formsOfPayment])

    return {
        formsOfPayment,
        formOfPayment,
        findByFormOfPayment,
        deleteFormOfPayment,
    }
}