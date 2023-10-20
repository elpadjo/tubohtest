import { heroImage } from "../assets"

export default function Hero() {
    return (
        <section className='bg-bg_1 py-20'>
            <div className="container mx-auto flex items-center gap-20">
                <div className="flex-auto">
                    <h1 className="text-5xl font-bold text-accent">Book At Home Lab Appointments</h1>
                    <p className="my-4 text-accent text-base">Get your blood work done from your home or office or do a walk in and have your test results delivered to you.</p>
                </div>
                <div className="">
                    <img src={heroImage} alt="Kid receiveing treatment"
                        className="object-scale-down h-auto" />
                </div>
            </div>
        </section>
    )
}
