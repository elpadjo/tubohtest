import Svg from '../../reusables/Svg'

export default function PartnerTag({ icon, name }: { icon: string, name: string }) {
    return (
        <div className="bg-bg_2 p-8 flex items-center justify-center gap-2 rounded-lg">
            <Svg src={icon} />
            <span className='font-semibold'>{name}</span>
        </div>
    )
}
