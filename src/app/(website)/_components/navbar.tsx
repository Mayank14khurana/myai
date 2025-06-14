import { Button } from "@/components/ui/button"
import { MenuIcon, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const LandingPageNavbar = () => {
  return (
    <div className="flex w-full justify-between items-center ">
        <div className="text-3xl font-semibold flex items-center gap-x-3">
         <MenuIcon className="h-6 w-6" />
         <Image src='/opal-logo.svg' width={32} height={32} alt='Logo' />
         Opal
        </div>
        <div className="hidden gap-x-10 items-center lg:flex ">
         <Link href='/' className="bg-[#7320DD] py-2 px-5 font-semibold text-lg rounded-full hover:bg-[#7320DD]/80">Home</Link>
         <Link href='/' className="bg-[#7320DD] py-2 px-5 font-semibold text-lg rounded-full hover:bg-[#7320DD]/80">Pricing</Link>
         <Link href='/' className="bg-[#7320DD] py-2 px-5 font-semibold text-lg rounded-full hover:bg-[#7320DD]/80">Contact</Link>
        </div>
        <Link href='/auth/sign-in'>
        <Button className="text-black flex gap-x-2 bg-white">
          <User fill="#000"/>
          Login</Button>
        </Link>
    </div>
  )
}

export default LandingPageNavbar
