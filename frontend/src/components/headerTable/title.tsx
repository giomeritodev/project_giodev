import { ReactNode } from "react";

interface HeaderTableProps {
    title: string
    children: ReactNode
}

export function HeaderTable({title, children}: HeaderTableProps){
    return(
        <div className="flex gap-3 items-center">
           
            <h1 className="text-2xl font-bold">{title}</h1>
            <div className="px-3 w-72 py-1.5 border border-white/10 bg-transparent rounded-lg text-sm flex items-center gap-3">
                {children}
            </div>
            
        </div>
    )
}