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
import { api } from "@/lib/api"
import { CityType } from "@/pages/cities/entities/cityEntity"
import { UseState } from "@/pages/states/hooks/useState"
import { ReactNode, useState } from "react"
import { toast } from "react-toastify"

interface ModalEditProps {
    children: ReactNode,
    id: number,
    description: string,
    un?: string,
    url: string;
    state?: CityType;
    uff?: string;
}


export function ModalEdit({children, id, description, un, url, state, uff}: ModalEditProps) {

  const [name, setName] = useState(description);
  const [sigla, setSigla] = useState(un);
  const [stateId, setStateId] = useState(state?.state.id);
  const [uf, setUf] = useState(uff);


  const {states} = UseState();

  async function editData(name: string, sigla?: string, stateId?: number, uf?: string){    
    if(sigla){
      await api.put(`/${url}/${id}`, {name, sigla}).then(response => {        
        toast.success("Unidade de medida alterado com sucesso.");
        return response;
      })
    }else if(state){
      await api.put(`/${url}/${id}`, {name, stateId}).then(response => {
        toast.success("Cidade alterada com sucesso.");
        return response;
      })
    }else if(uff){
      await api.put(`/${url}/${id}`, {name, uf}).then(response => {
        toast.success("Estado alterado com sucesso.");
        return response;
      })
    }else{
      await api.put(`/${url}/${id}`, {name}).then(response => {
        toast.success("Dados alterados com sucesso.");
        return response;
      })
    }
  }

  return (
    <form>
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
          <div className="sm:grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="sm:text-right">
              Descrição do item
            </Label>
            <Input 
              defaultValue={description} 
              className="col-span-3"
              value={name}
              onChange={(e) => setName(e.target.value)} 
            />
            
          </div>
            {
                un === undefined ? (<div></div>) : (
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label>Sigla</Label>
                        <Input 
                          defaultValue={un} 
                          className="col-span-3"
                          value={sigla}
                          onChange={(e) => setSigla(e.target.value)} 
                        />
                        
                    </div>
                )
            }
            {
                uff === undefined ? (<div></div>) : (
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label>UF</Label>
                        <Input 
                          defaultValue={uff} 
                          className="col-span-3"
                          value={uf}
                          onChange={(e) => setUf(e.target.value)} 
                        />
                        
                    </div>
                )
            }
            {
              state === undefined ? (<div></div>) : (
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label>Estado</Label>
                    <select 
                      defaultValue={state?.stateId} 
                      className="col-span-3 h-10 border border-zinc-500 rounded-lg  "
                      value={stateId}
                      onChange={(e) => setStateId(Number(e.target.value))} 
                    >
                      <option key={state.id} value={state?.state.id}>{state?.state.name} - {state?.state.uf}</option>
                      {
                        states.map(st => (
                          <option key={st.id} value={st.id}>{st.name} - {st.uf}</option>
                        ))
                      }
                    </select>
                    
                </div>
              )
            }   
           </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button onClick={() => editData(name, sigla, stateId, uf)}>Salvar os dados</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
    </form>
  )
}
