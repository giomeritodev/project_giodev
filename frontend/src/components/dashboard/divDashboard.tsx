import { ComponentProps, ReactNode } from "react"

interface DivDashboardProps extends ComponentProps<'div'> {
    children: ReactNode
}

export function DivDashboard({children, ...rest}: DivDashboardProps){
    return (
        <div 
            {...rest} 
            className="bg-zinc-700 rounded-sm p-4 flex-1 border border-zinc-900 flex items-center"
        >
            {children}
        </div>
    )
}