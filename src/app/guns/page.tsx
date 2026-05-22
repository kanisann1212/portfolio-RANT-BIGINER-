import { Header } from "@/components/TOP PAGE/Header"
import type { SkinLevels, WeponType, Skined } from "@/types/type"
import Image from "next/image"
import Link from "next/link"

export default async function Guns() {
  const basepath = "/guns"
  const res = await fetch("https://valorant-api.com/v1/weapons")
  const json = await res.json()
  const filterdWeponSkin: WeponType[] = json.data.map((wepon: WeponType) => ({
    ...wepon,
    skins: wepon.skins.filter((skin: Skined) => skin.chromas.length >= 4),
  }))
  console.log(filterdWeponSkin)

  return (
    <>
      <Header />
      <div
        className="grid gap-2 mt-10 ml-10"
        style={{ gridTemplateColumns: 'repeat(2,200px)' }}>
        {filterdWeponSkin.map((wepon: WeponType) => (
          <div className="flex flex-col ">
            <div key={wepon.uuid} className="relative w-[200px] h-[200px] overflow-hidden bg-black rounded-4xl ">
              <Image
                src={wepon.displayIcon}
                alt={wepon.uuid}
                fill
                className="rotate-90 object-contain  " />
              <Link
                href={`${basepath}/${wepon.uuid}`}
                key={wepon.uuid}
              >
                <p className="font-bold text-3xl [writing-mode:vertical-rl] text-center">{wepon.displayName}</p>
              </Link>
            </div>
          </div>
        ))}
      </div >
    </>
  )
}