import { useState } from "react";
import { UseEntry } from "../../hooks/useEntry";
import { api } from "@/lib/api";
import { PaymentType } from "../entities/PaymentType";
import { toast } from "react-toastify";


export function UsePayment() {

    const [datePayment, setDatePayment] = useState(`${new Date("DD/MM/AAAA")}`); 
    //const [entryId, setEntryId] = useState();
    const [formOfPaymentId, setFormOfPaymentId] = useState(0);
    const [statusPaymentId, setStatusPaymentId] = useState(0);
    const [valuePayment, setValuePayment] = useState(0);

    const [payments, setPayments] = useState<PaymentType[]>([]);

    const { findByEntry, entry } = UseEntry();

    async function createPaymentEntry(entryId: number){
        try {
            findByEntry(entryId);
            if(entry?.status.name === "Aberto"){
                await api.post("/entry/payment", {entryId, datePayment, formOfPaymentId, statusPaymentId, valuePayment}).then(  response => {
                    toast.success(`O pagamento do valor ${valuePayment} foi efetuado.`);
                    return response;
                })
            }else{
                toast.error("Compra não pode receber pagamento.")
            }
        } catch (error) {
            toast.error("Ops; Houve um erro ao processar o pagamento.")
        }
    }

    async function findPaymentByEntry(entryId: number){
        try {
            await api.get(`/entry/payment/${entryId}`).then(response => {
                setPayments(response.data);
            })
        } catch (error) {
            toast.error("Ops; Houve um erro ao carregar os pagamentos.")
        }
    }

    async function deletePayment(entryId: number, itemId: number){
        try {
            await api.delete(`/entry/payment/${entryId}/delete/${itemId}`).then(response => {
                toast.success("Pagamento removido da lista")
                return response;
            })
        } catch (error) {
            toast.error("Não foi possivel remover o pagamento.")
        }
    }

    return {
        datePayment, formOfPaymentId, statusPaymentId, valuePayment,
        setDatePayment, setFormOfPaymentId, setStatusPaymentId, setValuePayment,
        createPaymentEntry, findPaymentByEntry, payments, deletePayment
    }
}