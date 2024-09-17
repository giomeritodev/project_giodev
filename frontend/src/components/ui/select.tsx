import { SelectHTMLAttributes } from "react";

interface InputProps extends SelectHTMLAttributes<HTMLSelectElement>{}

export function SelectVisao({...rest}: InputProps){

    return (
        <select 
            className="bg-zinc-900 appearance-none block w-full border border-gray-500 py-3 px-4 mb-3 leading-tight focus:outline-none text-gray-50 rounded-xl"
            {...rest} 
        />
    )
}