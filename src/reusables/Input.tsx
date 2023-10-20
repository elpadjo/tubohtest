import { ComponentProps } from "react"

function Input({ type = 'text', className, placeholder, ...props }: ComponentProps<'input'>) {
    return (
        <input type={type}
            className={`p-2 border border-bg_1 rounded outline-none ${className}`}
            placeholder={placeholder} {...props} />
    )
}

export default Input