import { MapList } from "@/components/Maplist"
import Link from "next/link"
import Image from "next/image"

export default async function Mapp1() {
  return (
    <>
      <div className="flex justify-between items-center text-black  pt-10 mb-5 border-b">
        <div className="flex">
          <Image
          src="/VALG.png"
          alt="VALOGO"
          width={30}
          height={30}
          />
          <h1 className="text-black">RANT BEGINNER</h1>
        </div>
        <div>
        <Link href="/" className="text-black">HOME</Link>
        <Link href="/guns" className="text-black">WEAPON</Link>
        <Link href="/map" className="text-black">MAP</Link>
        </div>
      </div>
      <MapList />
    </>
  )
}




