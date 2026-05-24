import { Header } from "@/components/TOP PAGE/Header";
import { WeponSkinPatternLayout } from "@/components/GUN LAYOUT/WeponSkinPattern";

type Weponpattern = {
  [key:string] :{Windex:number}
}

type GunPromise = {
  params: Promise<{ gun: string }>
}

export default async function Gun({ params }: GunPromise) {
  const { gun } = await params
  const res = await fetch(`https://valorant-api.com/v1/weapons/${gun}`)
  const json = await res.json()
  const Weponinfo = json.data
  const WeponName = json.data.displayName
  const WeponPattern :Weponpattern = {
    Vandal:{Windex:8},
    Odin:{Windex:31},
    Ares:{Windex:8},
    Bulldog:{Windex:1},
    Phantom:{Windex:87},
    Judge:{Windex:7},
    Bucky:{Windex:21},
    Frenzy:{Windex:2},
    Classic:{Windex:21},
    Bandit:{Windex:5},
    Ghost:{Windex:5},
    Sheriff:{Windex:18},
    Shorty:{Windex:2},
    Operator:{Windex:21},
    Guardian:{Windex:5},
    Outlaw:{Windex:0},
    Marshal:{Windex:30},
    Spectre:{Windex:6},
    Stinger:{Windex:9},
    Melee:{Windex:98},
  }
  const {Windex} = WeponPattern[WeponName] ?? {Windex:0}
  console.log(Weponinfo)
  return (
    <>
      <Header />
      <div>
        <WeponSkinPatternLayout Guninfo={Weponinfo} Windex={Windex} />
      </div>
    </>
  )
}