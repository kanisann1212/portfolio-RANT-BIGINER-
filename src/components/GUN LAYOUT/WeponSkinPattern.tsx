import type { WeponType } from "@/types/type"
import { Gauge } from "./gauge"
import { WeaponSkinChroma } from "@/types/type"

type Props = {
  Guninfo: WeponType
  Windex: number
}

export const WeponSkinPatternLayout = ({ Guninfo, Windex }: Props) => {
  const Gaia1 = Guninfo.skins[Windex]
  const Gaia2: WeaponSkinChroma = Gaia1.chromas[1] ?? Gaia1.chromas[0]

  return (
    <div className="relative">

      <div className="relative h-[40vh] md:h-screen mask-b-from-90% mask-t-from-95%">
        <video
          className="inset-0 w-full h-full object-cover"
          src={Gaia2.streamedVideo}
          alt="Vlorant111"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>


      <h1 className="text-3xl font-bold mt-4 ml-4 md:absolute md:top-30 md:left-20 md:text-7xl md:mt-0 md:ml-0">
        {Gaia2.displayName}
      </h1>

      <div className="px-4 py-6 md:absolute md:bottom-10 md:left-0 md:right-0 md:px-0 md:py-0">
        <div className="flex flex-col">
          <h1 className="text-3xl md:text-7xl mb-5 md:mb-10 ml-0 md:ml-10">
            {Guninfo.displayName}
          </h1>

          {Guninfo.weaponStats && (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10">
              <div className="backdrop-blur-sm">
                <Gauge
                  value={Guninfo.weaponStats.magazineSize}
                  max={100}
                  label="magazinsizeー装填段数"
                />
              </div>
              <div className="backdrop-blur-sm">
                <Gauge
                  value={Guninfo.weaponStats.reloadTimeSeconds}
                  max={5}
                  reverse
                  label="reloadTimeSecondsーリロード速度"
                />
              </div>
              <div className="backdrop-blur-sm">
                <Gauge
                  value={Guninfo.weaponStats.firstBulletAccuracy}
                  max={5}
                  label="firstBulletAccuracyー集団率"
                />
              </div>
              <div className="backdrop-blur-sm">
                <Gauge
                  value={Guninfo.weaponStats.fireRate}
                  max={16}
                  label="fireRateー発射レート"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}