import { ComponentProps, ReactNode } from "react"
import { tv, VariantProps } from 'tailwind-variants'

const buttonVariants = tv({
    base: 'rounded-lg px-5 font-medium flex items-center justify-center gap-2', //CSS que iguala todos botões

    variants: {
        variant: {
            primary: 'border bg-lime-300 text-lime-950 hover:bg-lime-400',
            secondary: 'border bg-zinc-800 text-zinc-200 hover:bg-zinc-700',
            tertiary: "border bg-red-800 text-red-200 hover:bg-red-700"
        },

        size: {
            default: 'py-2',
            full: 'w-full h-11'
        }
    },

    defaultVariants: {
        variant: 'primary',
        size: 'default'
    }
})

interface ButtonProps extends ComponentProps<'button'>, VariantProps<typeof buttonVariants>{
    children: ReactNode
}

export function Button({children, variant, size, ...props}: ButtonProps){

    return (
        <button {...props} className={buttonVariants({ variant, size })}>
           {children}
        </button>
    )
}