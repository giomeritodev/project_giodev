import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Save } from "lucide-react";
import { ReactNode, useEffect, useState } from "react";
import { UseProduct } from "@/pages/products/hooks/useProduct";
import { UsePayment } from "./hook/usePayment";
import { UseFormOfPayment } from "@/pages/formOfPayment/hooks/useFormOfPayment";
import { UseStatusPayment } from "@/pages/statusPayment/hooks/useStatusPayment";
import { PaymentType } from "./entities/PaymentType";

interface NewItemEntryProps {
    children: ReactNode,
    id: number,
    total: number,
}

export function NewPayment({ children, id, total }: NewItemEntryProps) {

    const {
        datePayment, formOfPaymentId, statusPaymentId, valuePayment,
        setDatePayment, setFormOfPaymentId, setStatusPaymentId, setValuePayment,
        createPaymentEntry, findPaymentByEntry, payments,
    } = UsePayment()

    const { formsOfPayment } = UseFormOfPayment()
    const { statusPayments } = UseStatusPayment()
   
    useEffect(() => {
        findPaymentByEntry(id);
    }, [payments])


    return (
        <div>
            <form>
                <Dialog>
                    <DialogTrigger asChild>
                        {children}
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[640px]">
                        <DialogHeader>
                            <DialogTitle>Adicionando pagamento</DialogTitle>
                            <DialogDescription>
                                Incluindo pagamento para compra.
                            </DialogDescription>
                        </DialogHeader>

                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="entryId" className="text-right">Código da entrada</Label>
                                <Input
                                    className="col-span-3"
                                    defaultValue={id}
                                    value={id}
                                    disabled
                                />
                            </div>

                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="number_address" className="text-right">
                                    Data do pagamento
                                </Label>
                                <Input
                                    className="col-span-3"
                                    value={datePayment}
                                    onChange={(e) => setDatePayment(e.target.value)}
                                />
                            </div>


                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="complement" className="text-right">
                                    Formas de pagamentos
                                </Label>

                                <select
                                    className="h-10 border border-input rounded-md"
                                    value={formOfPaymentId}
                                    onChange={(e) => setFormOfPaymentId(Number(e.target.value))}
                                >
                                    <option value="">Selecione uma opção</option>
                                    {
                                        formsOfPayment.map(forma => (
                                            <option value={forma.id}>{forma.name}</option>
                                        ))
                                    }
                                </select>
                            </div>

                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="complement" className="text-right">
                                    Status de pagamentos
                                </Label>

                                <select
                                    className="h-10 border border-input rounded-md"
                                    value={statusPaymentId}
                                    onChange={(e) => setStatusPaymentId(Number(e.target.value))}
                                >
                                    <option value="">Selecione uma opção</option>
                                    {
                                        statusPayments.map(status => (
                                            <option value={status.id}>{status.name}</option>
                                        ))
                                    }
                                </select>
                            </div>

                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="cep" className="text-right">
                                    Valor de pagamento
                                </Label>
                                <Input
                                    type="number"
                                    className="col-span-3"
                                    value={valuePayment}
                                    onChange={(e) => setValuePayment(Number(e.target.value))}
                                />
                            </div>

                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="sector" className="text-right">
                                    Total da compra
                                </Label>
                                <Input
                                    className="col-span-3"
                                    value={total}
                                />
                            </div>
                            
                        </div>
                        <DialogFooter>
                            <Button onClick={() => createPaymentEntry(id)}>
                                <Save />
                                Salvar
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </form>
        </div>
    )
}