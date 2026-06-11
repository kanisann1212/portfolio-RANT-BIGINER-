import type { MapType } from "@/types/type"
import { AnimationMaplist } from "../animation/AnimationMaplist"

export const MapList = async () => {
  const res = await fetch("https://valorant-api.com/v1/maps")
  const json = await res.json()
    console.log(json.data)
  const BattleMap: MapType[] = json.data
    .filter((map: MapType) => map.splash)
    .filter((map: MapType) => map.tacticalDescription)



console.log(BattleMap)
  return (
    <AnimationMaplist BattleMap={BattleMap} />
  )
}