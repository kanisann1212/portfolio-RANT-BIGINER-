import { Header } from "@/components/TOP PAGE/Header";
import { VandalLayout } from "@/components/GUN LAYOUT/VandalLayout";
import { OdinLayout } from "@/components/GUN LAYOUT/Odin";
import { PhantomLayout } from "@/components/GUN LAYOUT/Phantom";
import { AresLayout } from "@/components/GUN LAYOUT/Ares";
import { BulldogLayout } from "@/components/GUN LAYOUT/Bulldog";
import { JudgeLayout } from "@/components/GUN LAYOUT/Judge";
import { BuckyLayout } from "@/components/GUN LAYOUT/Bucky";
import { OperatorLayout } from "@/components/GUN LAYOUT/Operator";
import { FrenzyLayout } from "@/components/GUN LAYOUT/Frenzy";
import { BanditLayout } from "@/components/GUN LAYOUT/Bandit";
import { StingerLayout } from "@/components/GUN LAYOUT/Stinger";
import { SpectreLayout } from "@/components/GUN LAYOUT/Spectre";
import { ClassicLayout } from "@/components/GUN LAYOUT/Classic";
import { MarshalLayout } from "@/components/GUN LAYOUT/Marshal";
import { GhostLayout } from "@/components/GUN LAYOUT/Ghost";
import { MeleeLayout } from "@/components/GUN LAYOUT/Melee";
import { OutlawLayout } from "@/components/GUN LAYOUT/Outlaw";
import { GuardianLayout } from "@/components/GUN LAYOUT/Guardian";
import { ShortyLayout } from "@/components/GUN LAYOUT/Shorty";
import { SheriffLayout } from "@/components/GUN LAYOUT/Sheriff";


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
      <div>
      {WeponName === "Vandal" && <VandalLayout Guninfo={Weponinfo} />}
      {WeponName === "Odin" && <OdinLayout Guninfo={Weponinfo} />}
      {WeponName === "Phantom" && <PhantomLayout Guninfo={Weponinfo} />}
      {WeponName === "Ares" && <AresLayout Guninfo={Weponinfo} />}
      {WeponName === "Bulldog" && <BulldogLayout Guninfo={Weponinfo} />}
      {WeponName === "Operator" && <OperatorLayout Guninfo={Weponinfo} />}
      {WeponName === "Frenzy" && <FrenzyLayout Guninfo={Weponinfo} />}
      {WeponName === "Bandit" && <BanditLayout Guninfo={Weponinfo} />}
      {WeponName === "Bucky" && <BuckyLayout Guninfo={Weponinfo} />}
      {WeponName === "Judge" && <JudgeLayout Guninfo={Weponinfo} />}
      {WeponName === "Stinger" && <StingerLayout Guninfo={Weponinfo} />}
      {WeponName === "Spectre" && <SpectreLayout Guninfo={Weponinfo} />}
      {WeponName === "Classic" && <ClassicLayout Guninfo={Weponinfo} />}
      {WeponName === "Marshal" && <MarshalLayout Guninfo={Weponinfo} />}
      {WeponName === "Melee" && <MeleeLayout Guninfo={Weponinfo} />}
      {WeponName === "Outlaw" && <OutlawLayout Guninfo={Weponinfo} />}
      {WeponName === "Guardian" && <GuardianLayout Guninfo={Weponinfo} />}
      {WeponName === "Shorty" && <ShortyLayout Guninfo={Weponinfo} />}
      {WeponName === "Sheriff" && <SheriffLayout Guninfo={Weponinfo} />}
      {WeponName === "Ghost" && <GhostLayout Guninfo={Weponinfo} />}
      </div>
    </>
  )
}