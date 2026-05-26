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
    <div className="grid grid-cols-[400px_400px] ">
      {MapsRecomend.map((recomend) => {
        return (
          <div className="flex flex-col justify-center items-center" key={recomend.name}>
            <Link
              key={recomend.uuid}
              href={`${basepath}/${recomend.uuid}`}
            >
              <div className="relative w-[400px] h-[400px] top-0 ">
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
          </div>
        )
      })}
    </div>
  )
}