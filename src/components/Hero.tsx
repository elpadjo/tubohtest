import { heroImage } from "../assets"

export default function Hero() {
    return (
        <section className='bg-bg_1 py-20'>
            <div className="w-90% sm:container px-6 max-w-screen-sm mx-auto flex flex-col gap-8 md:flex-row-reverse items-center md:gap-20">
                <div className="">
                    <img src={heroImage} alt="Kid receiveing treatment"
                        className="object-scale-down h-auto" />
                </div>
                <div className="flex-auto">
                    <h1 className="text-4xl md:text-5xl font-bold text-accent">Book At Home Lab Appointments</h1>
                    <p className="my-4 text-accent text-base">Get your blood work done from your home or office or do a walk in and have your test results delivered to you.</p>
                </div>
            </div>
        </section>
    )
}
