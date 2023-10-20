import TopBookedTestsCard from "./TopBookedTestsCard"

const TBTData = Array(8).fill({
    title: 'Pregnancy Test',
    description: 'Give your body a general health check and find out how to support your health',
    price: '1,250'
})

export default function TopBookedTests() {
    return (
        <section className='py-12'>
            <div className='container mx-auto'>
                <h2 className='text-3xl font-bold text-accent my-12'>Top Booked Tests</h2>
                <div className="grid grid-cols-4 gap-x-8 gap-y-10">
                    {TBTData.map((item, index) => (
                        <TopBookedTestsCard
                            key={index}
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
