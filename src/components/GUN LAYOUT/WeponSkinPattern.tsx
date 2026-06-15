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
  
    <div className="relative w-full min-h-screen flex flex-col md:block">

      
      <div className="relative shrink-0 h-[40vh] md:h-screen mask-b-from-90% mask-t-from-95%">
        <video
          className="inset-0 w-full h-full object-cover"
          src={Gaia2.streamedVideo}
          alt="VALORANT"
          autoPlay
          loop
          muted
          playsInline
        />
        
      
        <h1 className="
          absolute top-4 left-4 z-10
          text-3xl font-bold text-white drop-shadow-lg
          md:top-20 md:left-20 md:text-7xl
        ">
          {Guninfo.displayName}
        </h1>
      </div>


    
      <div className="
        flex-1 w-full flex flex-col justify-center items-center 
        /* --- スマホ・タブレット(md未満)用 --- */
        py-8 mt-4
        /* --- PC(md以上)用 --- */
        md:absolute md:inset-0 md:justify-end md:items-start md:mt-0 md:py-0 md:pointer-events-none
      ">
        
      
        <h1 className="
          text-2xl sm:text-3xl font-bold text-center w-full px-4 mb-10
          /* PC用配置 */
          md:absolute md:top-40 md:left-20 md:text-5xl md:text-left md:w-auto md:px-0
        ">
          {Gaia2.displayName}
        </h1>



        <div className="
          w-full flex flex-col items-center
          /* PC用配置 */
          md:absolute md:bottom-10 md:left-0 md:items-start md:mt-0 md:pointer-events-auto
        ">
          {Guninfo.weaponStats && (
            <div className="
              w-full grid grid-cols-2 lg:grid-cols-4 
              /* 【修正4】縦の隙間(gap-y)を広げて窮屈さを解消 */
              gap-x-3 gap-y-10 md:gap-10 
              px-3 md:px-10
            ">
              <div className="backdrop-blur-sm w-full">
                <Gauge
                  value={Guninfo.weaponStats.magazineSize}
                  max={100}
                  label="magazinsizeー装填段数"
                />
              </div>
              <div className="backdrop-blur-sm w-full">
                <Gauge
                  value={Guninfo.weaponStats.reloadTimeSeconds}
                  max={5}
                  reverse
                  label="reloadTimeSecondsーリロード速度"
                />
              </div>
              <div className="backdrop-blur-sm w-full">
                <Gauge
                  value={Guninfo.weaponStats.firstBulletAccuracy}
                  max={5}
                  label="firstBulletAccuracyー集団率"
                />
              </div>
              <div className="backdrop-blur-sm w-full">
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