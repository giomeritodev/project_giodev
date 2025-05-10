import { Pencil, Save, Undo2, X } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { FormEvent } from "react";

interface HeaderPageProps {
    url: string;
    title: string;
    editInputs: (event: FormEvent) => void;
}

export function HeaderPage({url, title, editInputs}: HeaderPageProps){
    
    return (
        <div className="sm:flex justify-between">
            <div>
                <h1>{title}</h1>
            </div>
            <div>
                <div className="md:flex sm:flex md:justify-between md:gap-4 sm:gap-4">
                    <div>
                        <Button className="w-full mb-2" type="button" onClick={editInputs}>
                            <Pencil /> 
                            Editar
                        </Button>
                    </div>
                    <div>
                        <Button className="w-full mb-2" type="submit">
                            <Save /> 
                            Salvar
                        </Button>
                    </div>
                    <div>
                        <Link to={url}>
                            <Button className="w-full mb-2" type="button">
                                <Undo2 />
                                Voltar
                            </Button>
                        </Link>
                    </div>
                    <div>
                        <Button className="w-full mb-2">
                            <X />                                 
                            Cancelar
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}