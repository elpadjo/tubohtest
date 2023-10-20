import { cartIcon } from "../assets/icons"
import Button from "../reusables/Button"
import Input from "../reusables/Input"

export default function Header() {
  return (
    <header className='p-4'>
      <div className="flex justify-between container mx-auto">
        <div className="flex">
          <Input placeholder="Your Location" className="rounded-r-none" />
          <Input placeholder="Search for Tests" className="rounded-l-none" />
        </div>
        <Button text="View Cart" icon={cartIcon} />
      </div>
    </header>
  )
}
