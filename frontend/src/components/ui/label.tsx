import { LabelHTMLAttributes } from "react";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement>{}

export function LabelVisao({...rest}: LabelProps){

    return (
        <label
            className="block uppercase tracking-wide text-gray-50 text-xs font-bold mb-2"
            {...rest}
        />
    )
}