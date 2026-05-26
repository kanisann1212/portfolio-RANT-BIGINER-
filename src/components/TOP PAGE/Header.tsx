import Link from "next/link"
import Image from "next/image"
import { User } from "lucide-react"

type WhiteProps = {
  Hanten?:boolean
}

export const Header = ({Hanten}:WhiteProps) => {
  return (
    <div className={`flex justify-between items-center ${Hanten ? "text-white ":"text-black"}  pt-5  border-b`}>
      <div className="flex pl-10 pb-5 items-center">
        <Link href="/" className = {`${Hanten ? "text-white ":"text-black"}`}>
          <Image
            src="/VALG.png"
            alt="VALOGO"
            width={30}
            height={30}
          />
        </Link>
        <Link href="/">
          <h1 className={`${Hanten ? "text-white ":"text-black"} text-3xl pl-5 `}>RANT BEGINNER</h1>
        </Link>
      </div>
      <div className="space-x-15 flex pr-15 pb-5">
        <Link href="/" className={`${Hanten ? "text-white ":"text-black"} text-3xl `}>HOME</Link>
        <Link href="/guns" className={`${Hanten ? "text-white ":"text-black"} text-3xl `}>WEAPON</Link>
        <Link href="/map" className={`${Hanten ? "text-white ":"text-black"} text-3xl `}>MAP</Link>
        <Link href="/egents" className={`${Hanten ? "text-white ":"text-black"} text-3xl `}>EGENT</Link>
        <User className="w-10 h-10 " />
      </div>
    </div>
  )
}
