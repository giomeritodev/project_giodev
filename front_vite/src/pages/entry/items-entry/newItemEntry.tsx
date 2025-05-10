import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Save } from "lucide-react";
import { ReactNode, useEffect, useState } from "react";
import { UseItemsEntry } from "./hooks/useItemsEntry";
import { UseProduct } from "@/pages/products/hooks/useProduct";

interface NewItemEntryProps {
    children: ReactNode,
    id: number
}

export function NewItemEntry({children, id}: NewItemEntryProps){

    const {
        entryId, productId, amount, shoppingValue,
        setEntryId, setProductId, setAmount, setShoppingValue,
        newHandleItemEntry
    } = UseItemsEntry()

    const {products} = UseProduct();
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(amount * shoppingValue);
    }, [amount, shoppingValue])


    return (
        <div>
            <form>
                <Dialog>
                    <DialogTrigger asChild>
                        {children}
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[640px]">
                        <DialogHeader>
                            <DialogTitle>Adicionando item</DialogTitle>
                        <DialogDescription>
                            Incluindo itens a compra.
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
                                    <Label htmlFor="complement" className="text-right">
                                        Produto
                                    </Label>
                                    <select
                                        className="h-10 border border-input rounded-md"
                                        value={productId}
                                        onChange={(e) => setProductId(Number(e.target.value))}
                                    >
                                        <option value="">Selecione um produto</option>
                                        {
                                            products.map(product => (
                                                <option value={product.id}>{product.name}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="number_address" className="text-right">
                                        Quantidade
                                    </Label>
                                    <Input
                                        className="col-span-3"
                                        value={amount}
                                        onChange={(e) => setAmount(Number(e.target.value))}
                                    />
                                </div>
                                
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="cep" className="text-right">
                                        Valor de compra
                                    </Label>
                                    <Input
                                        type="number"
                                        className="col-span-3"
                                        value={shoppingValue}
                                        onChange={(e) => setShoppingValue(Number(e.target.value))}
                                    />
                                </div>
                                
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <Label htmlFor="sector" className="text-right">
                                        Total do item  
                                    </Label>
                                    <Input
                                        className="col-span-3"
                                        value={total}
                                    />
                                </div>                               
                            </div> 
                            <DialogFooter>
                                <Button onClick={() => newHandleItemEntry(id)}>
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