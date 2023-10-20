import { appointmentImage } from "../assets"
import Button from "../reusables/Button"

export default function Appointment() {
    return (
        <section className='py-20'>
            <div className="container rounded-2xl p-20 mx-auto bg-bg_1 flex items-center gap-24">
                <div className="">
                    <img src={appointmentImage} alt="Kid receiveing treatment"
                        className="object-scale-down h-auto" />
                </div>
                <div className="flex-auto flex flex-col gap-6 items-start max-w-lg">
                    <h2 className="text-3xl font-bold text-accent">Ready to book a test with Medics2go?</h2>
                    <p className="text-accent text-base">Experience why patients love us and enjoy a convenient new way to have your labs collected.</p>
                    <Button text="Book Appointment"/>
                </div>
            </div>
        </section>
    )
}
