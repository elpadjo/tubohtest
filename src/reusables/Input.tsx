import { ComponentProps } from "react"

function Input({ type = 'text', className, placeholder, ...props }: ComponentProps<'input'>) {
    return (
        <input type={type}
            className={`p-1 border border-bg_1 rounded outline-none w-60 ${className}`}
            placeholder={placeholder} {...props} />
    )
}

export default Input