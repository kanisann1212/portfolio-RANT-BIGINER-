import { Header } from "@/components/Header"
import type { SkinLevels, WeponType } from "@/types/type"
import type { Skined } from "@/types/type"
import Image from "next/image"

export default async function Guns() {
  const res = await fetch("https://valorant-api.com/v1/weapons?language=ja-JP")
  const json = await res.json()
  const filterdWeponSkin: WeponType[] = json.data
    .map((wepon: WeponType) => ({
      ...wepon,
      skins: wepon.skins.filter((skin: Skin) => skin.chromas.length >= 4),
    })
    )
  console.log(filterdWeponSkin)


  return (
    <>
      <Header />
      {filterdWeponSkin.map((wepon: WeponType) => {
        console.log(wepon.weaponStats)
        return (
          <div key={wepon.uuid} className="text-black">
            <Image
              src={wepon.displayIcon}
              alt={wepon.uuid}
              width={200}
              height={400}
            />
            <Image
              src={wepon.displayIcon}
              alt={wepon.uuid}
              width={200}
              height={400}
            />
            <p>武器名：{wepon.displayName}</p>
            <p>発射レート：{wepon.weaponStats?.fireRate}</p>
            <p>装填弾数：{wepon.weaponStats?.magazineSize}</p>
            <p>リロード速度：{wepon.weaponStats?.reloadTimeSeconds}</p>
            <p>集団率：{wepon.weaponStats?.firstBulletAccuracy}</p>
            <p>{wepon.shopData?.categoryText}</p>
            <p>{wepon.shopData?.cost}</p>
            {wepon.skins.map((skin: Skined) => (
              <div key={skin.uuid}>
                {skin.displayIcon && (
                  <Image
                    src={skin.displayIcon}
                    alt={wepon.uuid}
                    width={200}
                    height={400}
                  />
                )}
                <p>{skin.displayName}</p>
                {/* {skin.chromas.map((chroma: SkinLevels) => (
                  <div key={chroma.uuid}>
                    {chroma.streamedVideo && (
                      <video
                        className="inset-0 w-full h-full object-cover "
                        src={chroma.streamedVideo}
                        autoPlay
                        loop
                        muted
                        playsInline
                      />

                    )} */}
                  </div>
                ))}
              </div>
            ))}
          </div>
        )
      })}
    </>
  )
}