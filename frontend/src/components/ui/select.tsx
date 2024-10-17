import { SelectHTMLAttributes } from "react";

interface InputProps extends SelectHTMLAttributes<HTMLSelectElement>{}

export function SelectVisao({...rest}: InputProps){

    return (
        <select 
            className="bg-zinc-700 appearance-none block w-full border border-gray-500 py-3 px-4 mb-3 leading-tight focus:outline-none text-black font-mono rounded-xl"
            {...rest} 
        />
    )
}