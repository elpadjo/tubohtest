import { cardImage } from "../../assets"
import HealthConcernCard from "./HealthConcernCard"

const HCCData = [
    { image: cardImage, title: 'Digestion', description: 'Give your body a general health check and find out how to support your health', price: '1,250' },
    { image: cardImage, title: 'Heart', description: 'Give your body a general health check and find out how to support your health', price: '1,250' },
    { image: cardImage, title: 'Skin', description: 'Give your body a general health check and find out how to support your health', price: '1,250' },
    { image: cardImage, title: 'Bone', description: 'Give your body a general health check and find out how to support your health', price: '1,250' },
    { image: cardImage, title: 'Digestion', description: 'Give your body a general health check and find out how to support your health', price: '1,250' },
    { image: cardImage, title: 'Heart', description: 'Give your body a general health check and find out how to support your health', price: '1,250' },
    { image: cardImage, title: 'Skin', description: 'Give your body a general health check and find out how to support your health', price: '1,250' },
    { image: cardImage, title: 'Bone', description: 'Give your body a general health check and find out how to support your health', price: '1,250' }
]

export default function HealthConcerns() {
    return (
        <section className='py-12'>
            <div className='container mx-auto'>
                <h2 className='text-3xl font-bold text-accent my-12'>Find Test based on Health Concerns</h2>
                <div className="grid grid-cols-4 gap-x-8 gap-y-10">
                    {HCCData.map((item, index) => (
                        <HealthConcernCard
                            key={index}
                            image={item.image}
                            title={item.title}
                            description={item.description}
                            price={item.price}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
