import { cartIcon } from "../assets/icons"
import Button from "../reusables/Button"
import Input from "../reusables/Input"

export default function Header() {
  return (
    <header className='p-4'>
      <div className="flex justify-between w-90% sm:container px-6 mx-auto">
        <div className="flex">
          <Input placeholder="Your Location" className="rounded-r-none w-20 md:w-60" />
          <Input placeholder="Search for Tests" className="rounded-l-none w-20 md:w-60" />
        </div>
        <Button text="View Cart" icon={cartIcon} />
      </div>
    </header>
  )
}
