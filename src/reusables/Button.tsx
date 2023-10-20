import React from 'react'
import cn from 'classnames'
import Svg from './Svg'

type ButtonProps = {
    text: string,
    variant?: 'outline' | 'solid',
    icon?: string,
    kind?: 'primary' | 'danger'
} & React.ComponentProps<'button'>

export default function Button({ className, text, kind = 'primary', variant = 'outline', icon, ...props }: ButtonProps) {
    return (
        <button
            className={cn(`border border-accent px-6 py-2 rounded-md text-accent ${className}`, {
                'bg-accent': variant === 'solid',
                'text-white': variant === 'solid',
                'border-red-400': kind === 'danger',
                'text-red-400': kind === 'danger',
                'flex gap-2 items-center': icon
            })} {...props}>
            <span className="font-semibold text-sm">{text}</span>
            {icon ? <Svg src={icon} /> : null}
        </button>
    )
}
