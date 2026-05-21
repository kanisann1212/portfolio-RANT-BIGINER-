import Link from "next/link"
import Image from "next/image"
import { User } from "lucide-react"

export const Header = () => {
  return (
    <div className="flex justify-between items-center text-black  pt-5  border-b">
      <div className="flex pl-10 pb-5 items-center">
        <Link href="/" className="text-black">
          <Image
            src="/VALG.png"
            alt="VALOGO"
            width={30}
            height={30}
          />
        </Link>
        <Link href="/">
          <h1 className="text-black text-3xl pl-5 ">RANT BEGINNER</h1>
        </Link>
      </div>
      <div className="space-x-15 flex pr-15 pb-5">
        <Link href="/" className="text-black text-3xl">HOME</Link>
        <Link href="/guns" className="text-black text-3xl">WEAPON</Link>
        <Link href="/map" className="text-black text-3xl">MAP</Link>
        <Link href="/egents" className="text-black text-3xl">EGENT</Link>
        <User className="w-10 h-10 " />
      </div>
    </div>
  )
}


// 後で動画埋め込む