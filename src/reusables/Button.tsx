import React from 'react'
import cn from 'classnames'
import Svg from './Svg'

type ButtonProps = {
    text: string,
    variant?: 'outline' | 'solid',
    icon?: string
} & React.ComponentProps<'button'>

export default function Button({ className, text, variant = 'outline', icon }: ButtonProps) {
    return (
        <button
            className={cn(`border border-violet-900 px-6 py-2 rounded-md text-accent ${className}`, {
                'bg-accent': variant === 'solid',
                'text-white': variant === 'solid',
                'flex gap-2 items-center': icon
            })}>
            <span className="font-semibold text-sm">{text}</span>
            {icon ? <Svg src={icon} /> : null}
        </button>
    )
}
