import Button from "../../reusables/Button"

type TBTCardProps = {
    title: string,
    description: string,
    price: string | number
}

export default function TopBookedTestsCard({ title, description, price }: TBTCardProps) {
    return (
        <div className="p-4 border border-bg_1 rounded-2xl flex flex-col gap-3 items-start">
            <span className="font-bold text-lg text-secondary">{title}</span>
            <span>{description}</span>
            <span className="text-accent font-semibold">₦{price}</span>
            <Button text="Add to Cart" />
        </div>
    )
}
