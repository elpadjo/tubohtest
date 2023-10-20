import React from 'react'
import cn from 'classnames'
import Svg from './Svg'
import { arrowDownIcon, arrowUpIcon } from '../assets/icons'

export default function Accordion({ title, children }: { title: string, children: React.ReactNode }) {
    const [isOpen, setIsOpen] = React.useState(false)
    return (
        <div className='bg-white p-2 px-4'>
            <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsOpen(prev => !prev)}>
                <span className={cn('font-semibold text-base', {
                    'text-accent': isOpen
                })}>{title}</span>
                <Svg src={isOpen ? arrowUpIcon : arrowDownIcon} />
            </div>
            {isOpen ? children : null}
        </div>
    )
}
