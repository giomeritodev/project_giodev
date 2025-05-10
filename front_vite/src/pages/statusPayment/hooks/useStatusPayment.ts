import { FormEvent, useEffect, useState } from "react"
import { api } from "@/lib/api";
import { toast } from "react-toastify";
import { StatusPaymentType } from "../entities/statusPaymentEntity";


export function UseStatusPayment(){

    const [name, setName] = useState("");
    const [statusPayments, setStatusPayments] = useState<StatusPaymentType[]>([]);
    const [statusPayment, setStatusPayment] = useState<StatusPaymentType>();
    
    async function handleCreateStatusPayment(event: FormEvent){
        event.preventDefault()
        try {
          await api.post("/status-payment", {name}).then(response => {
            toast.success("Item cadastrado com sucesso.")
            return response;
          })  
        } catch (error) {
            toast.error("Ops; Houve um erro ao cadastrar.")
        }
    }

    async function findAllStatusPayment(){
        try {
            await api.get("/status-payment").then(response => {
                setStatusPayments(response.data);
            })    
        } catch (error) {
            toast.error("Ops; Houve um erro ao buscas os dados.")
        }
    }

    // async function findByStatusPayment(id: number){
    //     try {
    //         await api.get(`/status-payment/${id}`).then(response => {
    //             setStatusPayment(response.data);
    //         })
    //     } catch (error) {
    //         toast.error("Ops; status de pagamento não encontrada.")
    //     }
    // }

    async function deleteStatusPayment(id: number){
        try {
            await api.delete(`/status-payment/${id}`).then(response => {
                toast.success("Item deletado com sucesso.");
                return response;
            })
        } catch (error) {
            toast.error("Ops; Houve um problema na deleção do item.")
        }
    }

    async function editStatusPayment(id: number, name: string){
        try {
            await api.put(`/status-payment/edit/${id}`, {name}).then(response => {
                toast.success("Dados alterados com sucesso.")
                console.log(response.data)
                return response.data;
            })
        } catch (error) {
            toast.error("Ops; Houve um erro na alteração dos dados.")
        }
    }

    useEffect(() => {
        findAllStatusPayment()
    }, [statusPayments])

    return {
        statusPayments,
        statusPayment,
        deleteStatusPayment,
        editStatusPayment,
        handleCreateStatusPayment,
        name,
        setName,
    }
}