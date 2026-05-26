import Image from "next/image"
import { Dela_Gothic_One } from "next/font/google"
import type { MapAgent } from "@/types/type"
import Link from "next/link"

const valorantEgent = Dela_Gothic_One({
  weight: "400",
  subsets: ["latin"]
})

type MapsRecomendProps = {
  MapsRecomend: MapAgent[]
}
const basepath = "/egents"

export const MapsRecomendparts = ({ MapsRecomend }: MapsRecomendProps) => {
  return (
    <div className="grid grid-cols-[450_450_450]">
      {MapsRecomend.map((recomend) => {
        return (
          <Link 
          className="flex flex-col items-center w-[450px] h-[450px]" 
          key={recomend.uuid}
         href={`${basepath}/${recomend.uuid}`}
         >
            <div className="relative w-[450px] h-[450px]">
              <Image
                src={recomend.fullPortrait}
                alt="VALORANT"
                fill
                className="object-cover bg-no-repeat"
                style={{
                  backgroundImage: `url(${recomend.roleIcon})`,
                  backgroundSize: "250px",
                  backgroundPosition: "top",
                }}
              />
            </div>
            <h1 className={`${valorantEgent.className} font-bold text-2xl`}>{recomend.name}</h1>
          </Link>
        )
      })}
    </div>
  )
}