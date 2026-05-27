import type { WeponType } from "@/types/type"
import { Gauge } from "./gauge"

type Props = {
  Guninfo: WeponType
  Windex: number
}

export const WeponSkinPatternLayout = ({ Guninfo, Windex }: Props) => {
  const Gaia1 = Guninfo.skins[Windex]
  const Gaia2 = Gaia1.chromas[1] 
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
      <div className="absolute bottom-10">
        <div className="flex flex-col">
          <h1 className="text-7xl mb-10 ml-10" >{Guninfo.displayName}</h1>
          {Guninfo.weaponStats &&(
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 ">
            <div className="backdrop-blur-sm">
              <Gauge value={Guninfo.weaponStats.magazineSize} max={100} label="magazinsizeー装填段数" />
            </div>
            <div className="backdrop-blur-sm">
              <Gauge value={Guninfo.weaponStats.reloadTimeSeconds} max={5} reverse label="reloadTimeSecondsーリロード速度" />
            </div>
            <div className=" backdrop-blur-sm">
              <Gauge value={Guninfo.weaponStats.firstBulletAccuracy} max={5} label="firstBulletAccuracyー集団率" />
            </div>
            <div className=" backdrop-blur-sm">
              <Gauge value={Guninfo.weaponStats.fireRate} max={16} label="fireRateー発射レート" />
            </div>
          </div>
          )}
        </div>
      </div>
    </>
  )
}