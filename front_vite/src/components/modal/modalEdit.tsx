import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { zodResolver } from "@hookform/resolvers/zod"
import { ReactNode } from "react"
import { useForm } from "react-hook-form"
import {z} from "zod";

const editItemSchema = z.object({
    id: z.number(),
    name: z.string().min(3, "Favor informar um valor valido."),
    sigla: z.string().max(2, "Favor informar um valor valido.").optional(),
})


interface ModalEditProps {
    children: ReactNode,
    id: number,
    saveData: (id: number, name: string, sigla?: string) => void,
    description: string,
    sigla?: string,
}

type EditItemSchema = z.infer<typeof editItemSchema>

export function ModalEdit({children, id, saveData, description, sigla}: ModalEditProps) {

    const {register, formState: {errors}} = useForm<EditItemSchema>({
        resolver: zodResolver(editItemSchema),
        defaultValues: {
            id: id,
            name: description,
            sigla: sigla,
        }
    })   


  return (
    <Sheet>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Alterando os dados do item código: {id}</SheetTitle>
          <SheetDescription>
            Descrição do item: {description}
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Descrição do item
            </Label>
            <Input 
              defaultValue={description} 
              {...register("name")} 
              className="col-span-3" 
            />
            {errors.name && <p className="text-red-600">{errors.name.message}</p>}
          </div>
            {
                sigla === undefined ? (<div></div>) : (
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label>Sigla</Label>
                        <Input defaultValue={sigla} {...register("sigla")} className="col-span-3" />
                        {errors.sigla && <p className="text-red-600">{errors.sigla.message}</p>}

                    </div>
                )
            }   
           </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button onClick={() => saveData(id, description, sigla)}>Salvar os dados</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
