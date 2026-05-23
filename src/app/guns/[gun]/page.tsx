import { Header } from "@/components/TOP PAGE/Header";
import { VandalLayout } from "@/components/GUN LAYOUT/VandalLayout";

type GunPromise = {
  params: Promise<{ gun: string }>
}

export default async function Gun({ params }: GunPromise) {
  const { gun } = await params
  const res = await fetch(`https://valorant-api.com/v1/weapons/${gun}`)
  const json = await res.json()
  const Weponinfo = json.data
  const WeponName = json.data.displayName
  console.log(Weponinfo)
  return (
    <>
      <Header />
      {WeponName === "Vandal" && <VandalLayout Guninfo={Weponinfo}/>}
    </>
  )
}