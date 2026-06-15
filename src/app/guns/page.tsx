import { AnimationGunlist } from "@/components/GUN LAYOUT/AnimationGunlist"
import { Header } from "@/components/TOP PAGE/Header"
import { MIBAE } from "@/components/TOP PAGE/MIBAE"
import type { WeponType, Skined } from "@/types/type"
import type { Wepondata } from "@/types/type"


export default async function Guns() {

  const res = await fetch("https://valorant-api.com/v1/weapons")
  const json: Wepondata = await res.json()
  const filterdWeponSkin: WeponType[] = json.data.map((wepon: WeponType) => ({
    ...wepon,
    skins: wepon.skins.filter((skin: Skined) => skin.chromas.length >= 4),
  }))

  return (
    <>
      <Header />
      <MIBAE gazou="https://totnfaipgpkmgjvlcqee.supabase.co/storage/v1/object/public/RANTBIGINNER.IMAGE/FIRE.jpg" syubun="エイムはすべての人に与えられた平等の力です。" hukubun="適切な武器と完璧なエイムで相手を叩き潰しましょう" kime="ーBring it onー" />
      <AnimationGunlist filterdWeponSkin={filterdWeponSkin} />
    </>
  )
}