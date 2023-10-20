type SvgProps = {
    className?: string,
    src: string
}

export default function Svg({ src, className = '' }: SvgProps) {
    return (
        <svg className={`${className}`} height={'1.1em'} width={'1.1em'} >
            <use href={src} width={'100%'} height={'100%'} />
        </svg>
    )
}
