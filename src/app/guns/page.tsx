import { Header } from "@/components/TOP PAGE/Header"
import type { SkinLevels, WeponType, Skined } from "@/types/type"
import Image from "next/image"
import Link from "next/link"

export default async function Guns() {
  const basepath = "/guns"
  const res = await fetch("https://valorant-api.com/v1/weapons?language=ja-JP")
  const json = await res.json()
  const filterdWeponSkin: WeponType[] = json.data.map((wepon: WeponType) => ({
    ...wepon,
    skins: wepon.skins.filter((skin: Skined) => skin.chromas.length >= 4),
  }))
  console.log(filterdWeponSkin)

  return (
    <>
      <Header />
      {filterdWeponSkin.map((wepon: WeponType) => (
        <div key={wepon.uuid} className="text-black">
          <Link
            href={`${basepath}/${wepon.uuid}`}
            key={wepon.uuid}
            className="relative rounded-3xl"
          >
            <Image src={wepon.displayIcon} alt={wepon.uuid} width={200} height={400} />
          </Link>
          <p>武器名：{wepon.displayName}</p>
          <p>発射レート：{wepon.weaponStats?.fireRate}</p>
          <p>装填弾数：{wepon.weaponStats?.magazineSize}</p>
          <p>リロード速度：{wepon.weaponStats?.reloadTimeSeconds}</p>
          <p>集弾率：{wepon.weaponStats?.firstBulletAccuracy}</p>
          <p>{wepon.shopData?.categoryText}</p>
          <p>{wepon.shopData?.cost}</p>

        </div>
      ))}
    </>
  )
}