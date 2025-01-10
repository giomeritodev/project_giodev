import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { AlertCircle } from "lucide-react"
import { ReactNode } from "react"

  interface AlertDialogProps {
    children: ReactNode,
    id: number,
    deleteItem: (id: number) => void,
    item: string,
  }


export function AlertDialogVisao({children, id, deleteItem, item}: AlertDialogProps){

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                {children}
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                <AlertDialogTitle>
                    <AlertCircle size={32} className="text-yellow-400"/> 
                    Deseja realmente deletar o item?
                </AlertDialogTitle>
                <AlertDialogDescription>
                    {item}
                </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction  onClick={() => deleteItem(Number(id))}>Confirmar</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}