'use client'
import Image from "next/image"
import Link from "next/link"
import type { WeponType } from "@/types/type"

type WepondataProps ={
  filterdWeponSkin:WeponType[]
}

export const AnimationGunlist = ({filterdWeponSkin}:WepondataProps) => {
    const basepath = "/guns"
return(
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
)

}