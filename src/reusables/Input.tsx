import { ComponentProps } from "react"

function Input({ type, className, placeholder }: ComponentProps<'input'>) {
    return (
        <input type={type}
            className={`p-1 border border-bg_1 rounded outline-none w-60 ${className}`}
            placeholder={placeholder} />
    )
}

export default Input