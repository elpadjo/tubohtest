import Accordion from '../../reusables/Accordion'
import Button from '../../reusables/Button'
import { cartIcon } from '../../assets/icons'
import { CategoryData } from './defaultData'

export default function CategoryColumn({ data }: { data: Record<string, CategoryData[]> }) {
    const dataToMap = Object.entries(data)
    const halfLength = Math.ceil(dataToMap.length / 2)
    return (data
        ? <div className="grid grid-col-1 md:grid-cols-2 gap-4 items-start my-6">
            <div className='grid gap-4'>
                {dataToMap.slice(0, halfLength).map(([category, tests]) => (
                    <Accordion key={category} title={toInitialCaps(category)}>
                        <div className="flex flex-col gap-4 my-4">
                            {tests.map((test) => (
                                <div key={test.id} className="flex justify-between items-center font-semibold">
                                    <label htmlFor={test.title}><input type="checkbox" /> {test.title}</label>
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
                {dataToMap.slice(halfLength).map(([category, tests]) => (
                    <Accordion key={category} title={toInitialCaps(category)}>
                        <div className="flex flex-col gap-4 my-4">
                            {tests.map((test) => (
                                <div key={test.id} className="flex justify-between items-center font-semibold">
                                    <label htmlFor={test.title}><input type="checkbox" /> {test.title}</label>
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
        </div>
        : null
    )
}


function toInitialCaps(inputString: string) {
    const words = inputString.split(' ')
    const capitalizedWords = words.map(word => {
        if (word.length === 0) return ''
        return word.charAt(0).toUpperCase() + word.slice(1)
    })
    const resultString = capitalizedWords.join(' ')
    return resultString
}