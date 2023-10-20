import { calendarIcon } from '../../assets/icons'
import HIWCard from './HIWCard'
const HIWData = [
    { icon: calendarIcon, title: 'Book your apointment', description: 'Pick a time for a medics specialist to come to your home or office.' },
    { icon: calendarIcon, title: 'We collect your samples', description: 'We draw your labs for Labcorp and Quest and provide them your insurance information.' },
    { icon: calendarIcon, title: 'Get your lab result', description: 'Receive your lab results from your doctor, laboratory or via our app.' },
]
export default function HowItWorks() {
    return (
        <section className='py-12'>
            <h2 className='text-center text-3xl font-bold text-accent my-12'>How It Works</h2>
            <div className='w-90% sm:container px-6 mx-auto flex flex-col md:flex-row justify-between gap-6'>
                {HIWData.map((item) => (
                    <HIWCard key={item.title} icon={item.icon} title={item.title} description={item.description} />
                ))}
            </div>
        </section>
    )
}
