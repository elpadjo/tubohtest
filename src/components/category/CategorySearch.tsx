import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Input from '../../reusables/Input'
import CategoryColumn from './CategoryColumn'
import { CategoryData } from './defaultData'
import Button from '../../reusables/Button'

export default function CategorySearch() {
    const [searchParams, setSearchParams] = useSearchParams({ tests_query: '' })
    const [searchResults, setSearchResults] = useState<Record<string, CategoryData[]>>({})
    const [openResults, setOpenResults] = useState(false)
    const query = searchParams.get('tests_query')
    async function submitSearch(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const res = await fetch(`https://lpdosubi.com/api/laboratory/?search=${query}`)
        if (res.ok) {
            const { results } = await res.json()
            const categorizedResults = groupByCategory(results)
            setSearchResults(categorizedResults)
            setOpenResults(true)
        }
    }
    async function clearResults() {
        setSearchResults({})
        setSearchParams(prev => {
            prev.set('tests_query', '')
            return prev
        })
        setOpenResults(false)
    }
    return (
        <aside>
            <form onSubmit={submitSearch}>
                <Input type='search'
                    onChange={(e) => setSearchParams(prev => {
                        prev.set('tests_query', e.target.value)
                        return prev
                    })}
                    name='testSearch'
                    className='mb-10'
                    placeholder='Search for tests' />
            </form>
            {openResults
                ? <div className="border border-bg_1 rounded-2xl p-4">
                    <h3 className='font-semibold'>Search Results</h3>
                    <CategoryColumn data={searchResults} />
                    <Button kind='danger' onClick={clearResults} text='Clear Results' />
                </div>
                : null
            }
        </aside>
    )
}

function groupByCategory(data: CategoryData[]) {
    const categoryGrouping = {} as Record<string, CategoryData[]>;
    data.forEach(item => {
        const category = item.category
        if (!Object.hasOwn(categoryGrouping, category)) {
            categoryGrouping[category] = [item]
        } else {
            categoryGrouping[category].push(item)
        }
    })
    return categoryGrouping
}
