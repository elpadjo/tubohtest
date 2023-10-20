import Button from "../../reusables/Button"

type HCCardProps = {
    image: string,
    title: string,
    description: string,
    price: string | number
}

export default function HealthConcernCard({ image, title, description, price }: HCCardProps) {
    return (
        <div className="flex flex-col gap-3 items-start">
            <img className="w-full" src={image} alt="Flowers" width={250} height={250} />
            <span className="font-bold text-lg text-secondary">{title}</span>
            <span>{description}</span>
            <span className="text-accent font-semibold">₦{price}</span>
            <Button text="Add to Cart" />
        </div>
    )
}
