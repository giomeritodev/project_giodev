import classNames from "classnames";
import { ComponentProps } from "react";

interface IconButtonProps extends ComponentProps<"button">{
    transparent?: boolean
}

export function IconButton({transparent, ...props}: IconButtonProps){
    return(
        <button
            {...props}
            className={classNames(
                "border border-white/10 rounded-md px-1.5 p-1.5",
                transparent ? "bg-black/10 hover:bg-black" : "bg-white/10",
                props.disabled ? "opacity-50" : null
            )}
        />
    )
}