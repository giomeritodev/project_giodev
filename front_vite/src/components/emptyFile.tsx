import { Package2 } from "lucide-react";


export function EmptyFile(){

    return (
        <div className="gap-4">
            <div className="flex justify-center">
                <Package2 size={180} color="silver" />
            </div>
            <div className="flex justify-center">
                <h1 className="text-2xl text-zinc-400">Não existe dados cadastrados!</h1>
            </div>
        </div>
    )
}