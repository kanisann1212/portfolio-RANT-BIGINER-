import { Header } from "@/components/TOP PAGE/Header";
import { WeponSkinPatternLayout } from "@/components/GUN LAYOUT/WeponSkinPattern";
import type { WepondataInfo } from "@/types/type";
import type { GunPromise } from "@/types/type";
import type { Weponpattern } from "@/types/type";

export default async function Gun({ params }: GunPromise) {
  const { gun } = await params
  const res = await fetch(`https://valorant-api.com/v1/weapons/${gun}`,{ next: { revalidate: 86400 } })
  const json : WepondataInfo= await res.json()
  const Weponinfo = json.data
  const WeponName = json.data.displayName
  const WeponPattern :Weponpattern = {
    Vandal:{Windex:8},
    Odin:{Windex:31},
    Ares:{Windex:3},
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
  return (
    <>
      <Header />
      <div>
        <WeponSkinPatternLayout Guninfo={Weponinfo} Windex={Windex}  />
      </div>
    </>
  )
}