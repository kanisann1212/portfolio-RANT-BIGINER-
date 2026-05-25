import { Header } from "@/components/TOP PAGE/Header"
import { MIBAE } from "@/components/TOP PAGE/MIBAE"
import type { SkinLevels, WeponType, Skined } from "@/types/type"
import Image from "next/image"
import Link from "next/link"
type Wepondata ={
  data:WeponType[]
}

export default async function Guns() {
  const basepath = "/guns"
  const res = await fetch("https://valorant-api.com/v1/weapons")
  const json :Wepondata = await res.json()
  const filterdWeponSkin: WeponType[] = json.data.map((wepon: WeponType) => ({
    ...wepon,
    skins: wepon.skins.filter((skin: Skined) => skin.chromas.length >= 4),
  }))
  console.log(json)

  return (
    <>
      <Header />
      <MIBAE gazou="/FIRE.jpg" syubun="エイムはすべての人に与えられた平等の力です。" hukubun="適切な武器と完璧なエイムで相手を叩き潰しましょう" kime="ーBring it onー" />
      <div className="bg-[url(/GANBG.jpg)]  bg-no-repeat bg-[length:100%] h-[1600px] mask-t-from-80% relative mask-b-from-90% ">
        <div className="absolute top-100">
          <div
            className="grid gap-22 ml-2"
            style={{ gridTemplateColumns: 'repeat(10,170px)' }}>
            {filterdWeponSkin.map((wepon: WeponType) => (
              <Link
                href={`${basepath}/${wepon.uuid}`}
                key={wepon.uuid}
              >
                <div key={wepon.uuid} className="relative w-[200px] h-[400px] overflow-hidden backdrop-blur-xl border rounded-3xl ">
                  <Image
                    src={wepon.displayIcon}
                    alt={wepon.uuid}
                    fill
                    className="rotate-90 object-contain rouded-3xl " />
                  <p className="font-bold text-3xl [writing-mode:vertical-rl] text-center">{wepon.displayName}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}