import { layersIcon } from "../../assets/icons"
import PartnerTag from "./PartnerTag"

const partnerTags = Array(8).fill({ icon: layersIcon, name: 'Designership' })

export default function Partners() {
    return (
        <section className='py-12'>
            <div className="container mx-auto">
                <h2 className='text-3xl font-bold text-accent mb-3'>Our Partner Labs</h2>
                <p className='mb-8'>Your test will be conducted in one of our partner labs to ensure highest accuracy of your reports.</p>
                <div className='grid grid-cols-4 gap-8'>
                    {partnerTags.map((item) => (
                        <PartnerTag key={item.title} icon={item.icon} name={item.name} />
                    ))}
                </div>
            </div>
        </section>
    )
}
