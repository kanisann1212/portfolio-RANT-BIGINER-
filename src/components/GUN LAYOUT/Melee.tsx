import type { WeponType } from "@/types/type"
import { Gauge } from "./gauge"

type Props = {
  Guninfo: WeponType
}

export const MeleeLayout = ({ Guninfo }: Props) => {
  const Gaia1 = Guninfo.skins.filter((skin: string[], index: number) => index === 98)
  const Gaia2 = Gaia1[0].chromas[1]
  console.log(Guninfo)
  return (
    <>
      <div className="relative h-screen mask-b-from-90% mask-t-from-95%">
        <video
          className="inset-0 w-full h-full object-cover "
          src={Gaia2.streamedVideo}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <h1 className="absolute top-30 left-20 text-7xl" >{Gaia2.displayName}</h1>
      <h1 className="absolute top-220 left-20 text-7xl" >{Guninfo.displayName}</h1>
    </>
  )
}