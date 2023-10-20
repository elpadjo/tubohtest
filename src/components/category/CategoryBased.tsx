import CategoryColumn from './CategoryColumn'
import CategorySearch from './CategorySearch'
import { defaultData } from './defaultData'

export default function CategoryBased() {
    return (
        <section className='py-12 bg-bg_2'>
            <div className="container mx-auto">
                <h2 className='text-3xl font-bold text-accent mb-3'>Find Tests based on Category</h2>
                <CategorySearch />
                <CategoryColumn data={defaultData} />
            </div>
        </section>
    )
}
