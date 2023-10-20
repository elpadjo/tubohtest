import Input from '../../reusables/Input'
import Accordion from '../../reusables/Accordion'
import Button from '../../reusables/Button'
import { cartIcon } from '../../assets/icons'

const singleData = {
    title: 'Lipid Metabolism',
    tests: [
        { name: 'Cholesterol', price: 3300 },
        { name: 'LDL (Measured)', price: 4200 },
        { name: 'HDL Cholesterol', price: 4800 },
        { name: 'Lipogram (CHOL/HDL/TRIG/LDL)', price: 8200 },
        { name: 'Triglycerides', price: 3000 },
    ]
}
const categoryData = Array(20).fill(singleData) as typeof singleData[]

export default function CategoryBased() {
    return (
        <section className='py-12 bg-bg_2'>
            <div className="container mx-auto">
                <h2 className='text-3xl font-bold text-accent mb-3'>Find Tests based on Category</h2>
                <Input className='mb-10' placeholder='Search for tests' />
                <div className="grid grid-cols-2 gap-4">
                    <div className='grid gap-4'>
                        {categoryData.slice(0,10).map((item) => (
                            <Accordion key={item.title} title={item.title}>
                                <div className="flex flex-col gap-4 my-4">
                                    {item.tests.map((test) => (
                                        <div className="flex justify-between items-center font-semibold">
                                            <label htmlFor={test.name}><input type="checkbox" /> {test.name}</label>
                                            <span>₦{test.price}</span>
                                        </div>
                                    ))}
                                    <div className="flex gap-4">
                                        <Button text='Add to Cart' icon={cartIcon} />
                                        <Button text='Book Now' variant='solid' />
                                    </div>
                                </div>
                            </Accordion>
                        ))}
                    </div>
                    <div className='grid gap-4'>
                        {categoryData.slice(10).map((item) => (
                            <Accordion key={item.title} title={item.title}>
                                <div className="flex flex-col gap-4 my-4">
                                    {item.tests.map((test) => (
                                        <div className="flex justify-between items-center font-semibold">
                                            <label htmlFor={test.name}><input type="checkbox" /> {test.name}</label>
                                            <span>₦{test.price}</span>
                                        </div>
                                    ))}
                                    <div className="flex gap-4">
                                        <Button text='Add to Cart' />
                                        <Button text='Book Now' />
                                    </div>
                                </div>
                            </Accordion>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
