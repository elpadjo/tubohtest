import Svg from "../../reusables/Svg"

type HIWProps = { icon: string, title: string, description: string }

export default function HIWCard({ icon, title, description }: HIWProps) {
    return (
        <div className="flex flex-col items-center gap-2">
            <div className="rounded-full p-4 flex items-center justify-center bg-bg_1 mb-4">
                <Svg src={icon} className="text-accent" />
            </div>
            <h3 className='text-center text-lg font-bold text-secondary'>{title}</h3>
            <span className='text-center'>{description}</span>
        </div>
    )
}
